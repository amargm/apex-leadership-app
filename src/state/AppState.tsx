// ─── APEX App State — Client-side persistence ─────────────────────────────────
// Manages lesson progress, completion, saves, and stats locally.
// Uses React Context + AsyncStorage for persistence across app restarts.

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';
import type { LessonStatus } from '../types/lesson';
import { MOCK_LESSONS } from '../data/mockLessons';
import { configureGoogleSignIn, signInWithGoogle, signOut as authSignOut, onAuthStateChanged } from '../services/authService';
import { saveUserData, loadUserData, subscribeToUserTier, initUserTierIfMissing } from '../services/firestoreService';

// ─── Types ────────────────────────────────────────────────────────────────────

interface LessonProgress {
  status: LessonStatus;
  progress: number; // 0–100
  tabsViewed: string[]; // which tabs have been visited
  savedAt?: string; // ISO date if saved
  completedAt?: string; // ISO date if completed
  startedAt?: string; // ISO date if started
}

export interface Note {
  id: string;
  content: string;
  heading?: string; // reflection prompt heading
  lessonId?: string; // optional link to a lesson
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

// ─── Tier System ──────────────────────────────────────────────────────────────

export type UserTier = 'guest' | 'free' | 'pro';

/** Lessons available to guest users (no account) */
export const GUEST_LESSON_IDS = ['L001', 'L002'];

/** Lessons available to free (signed-up) users — includes guest lessons */
export const FREE_LESSON_IDS = ['L001', 'L002', 'L009', 'L007'];

/** Max notes allowed per tier (null = unlimited) */
const MAX_NOTES: Record<UserTier, number | null> = {
  guest: 0,
  free: 5,
  pro: null,
};

/** Returns accessible lesson IDs for a given tier */
export function getAccessibleLessonIds(tier: UserTier): string[] | null {
  switch (tier) {
    case 'guest': return GUEST_LESSON_IDS;
    case 'free': return FREE_LESSON_IDS;
    case 'pro': return null; // null = all lessons
  }
}

/** Check if a specific lesson is accessible for a tier */
export function isLessonAccessible(lessonId: string, tier: UserTier): boolean {
  if (tier === 'pro') return true;
  const ids = getAccessibleLessonIds(tier);
  return ids ? ids.includes(lessonId) : true;
}

interface AppState {
  lessons: Record<string, LessonProgress>;
  stats: {
    dayStreak: number;
    casesCompleted: number;
    timeThisWeekMinutes: number;
    lastActiveDate: string; // ISO date
    isoWeek: string; // e.g. "2026-W18" — used to reset weekly time
  };
  savedLessonIds: string[];
  notes: Note[];
  userName: string;
  largeFontOn: boolean;
  hasCompletedOnboarding: boolean;
  userTier: UserTier;
}

interface AppContextValue {
  state: AppState;
  loaded: boolean;
  firebaseUser: FirebaseAuthTypes.User | null;
  startLesson: (lessonId: string) => void;
  markTabViewed: (lessonId: string, tab: string) => void;
  completeLesson: (lessonId: string) => void;
  toggleSaveLesson: (lessonId: string) => void;
  getLessonProgress: (lessonId: string) => LessonProgress;
  isLessonUnlocked: (lessonId: string) => boolean;
  addNote: (content: string, lessonId?: string, heading?: string) => string;
  updateNote: (noteId: string, content: string, heading?: string, lessonId?: string | null) => void;
  deleteNote: (noteId: string) => void;
  addReadingTime: (minutes: number) => void;
  setUserName: (name: string) => void;
  setLargeFont: (on: boolean) => void;
  setUserTier: (tier: UserTier) => void;
  completeOnboarding: () => void;
  resetAllProgress: () => void;
  handleGoogleSignIn: () => Promise<boolean>;
  handleSignOut: () => Promise<void>;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = '@apex_app_state';
const DEBOUNCE_MS = 500;

const TAB_PROGRESS_MAP: Record<string, number> = {
  OVERVIEW: 25,
  TIMELINE: 50,
  REFLECT: 75,
  TAKEAWAYS: 100,
};

/** ISO week string e.g. "2026-W18" */
function getISOWeek(): string {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  const weekNum = 1 + Math.round(((d.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  return `${d.getFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

function getDefaultState(): AppState {
  const lessons: Record<string, LessonProgress> = {};
  MOCK_LESSONS.forEach((l) => {
    lessons[l.lesson_id] = {
      status: l.is_locked ? 'locked' as LessonStatus : 'new' as LessonStatus,
      progress: 0,
      tabsViewed: [],
      savedAt: undefined,
      completedAt: undefined,
      startedAt: undefined,
    };
  });

  return {
    lessons,
    stats: {
      dayStreak: 0,
      casesCompleted: 0,
      timeThisWeekMinutes: 0,
      lastActiveDate: '', // empty = first ever open; streak effect will set it
      isoWeek: getISOWeek(),
    },
    savedLessonIds: [],
    notes: [],
    userName: 'Leader',
    largeFontOn: false,
    hasCompletedOnboarding: false,
    userTier: 'guest',
  };
}

function getFreshState(): AppState {
  return getDefaultState();
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AppContext = createContext<AppContextValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(getDefaultState);
  const [loaded, setLoaded] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseAuthTypes.User | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cloudSyncRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stateRef = useRef<AppState>(state);
  const tierUnsubRef = useRef<(() => void) | null>(null);
  useEffect(() => { stateRef.current = state; }, [state]);

  // Configure Google Sign-In once
  useEffect(() => { configureGoogleSignIn(); }, []);

  // Listen to Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (user) => {
      setFirebaseUser(user);

      // Tear down any previous tier subscription
      if (tierUnsubRef.current) {
        tierUnsubRef.current();
        tierUnsubRef.current = null;
      }

      if (user) {
        crashlytics().setUserId(user.uid);
        crashlytics().setAttributes({ email: user.email || '' });

        // Load all cloud data on sign-in
        try {
          const cloudData = await loadUserData(user.uid);
          if (cloudData) {
            const defaults = getDefaultState();
            setState((prev) => ({
              lessons: cloudData.lessons ?? prev.lessons,
              stats: { ...defaults.stats, ...cloudData.stats },
              savedLessonIds: cloudData.savedLessonIds ?? prev.savedLessonIds,
              notes: cloudData.notes ?? prev.notes,
              userName: cloudData.userName ?? user.displayName ?? prev.userName,
              largeFontOn: cloudData.largeFontOn ?? prev.largeFontOn,
              hasCompletedOnboarding: true,
              // Tier comes from Firestore (admin-controlled); fall back to 'free'
              userTier: (cloudData.userTier as UserTier) ?? 'free',
            }));
          } else {
            // New user — ensure a default tier document exists for admin to promote
            initUserTierIfMissing(user.uid).catch(() => {});
          }
        } catch {
          // Use local state if cloud load fails
        }

        // Subscribe to real-time tier changes — picks up admin promotions instantly
        tierUnsubRef.current = subscribeToUserTier(user.uid, (tier) => {
          setState((prev) => {
            if (prev.userTier === (tier as UserTier)) return prev;
            return { ...prev, userTier: tier as UserTier };
          });
          crashlytics().setAttributes({ tier }).catch(() => {});
        });
      } else {
        crashlytics().setUserId('');
      }
    });
    return () => {
      unsubscribe();
      if (tierUnsubRef.current) tierUnsubRef.current();
    };
  }, []);

  // Load persisted state on mount
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          const defaults = getDefaultState();
          setState({
            lessons: parsed.lessons ?? defaults.lessons,
            stats: { ...defaults.stats, ...parsed.stats },
            savedLessonIds: parsed.savedLessonIds ?? defaults.savedLessonIds,
            notes: parsed.notes ?? defaults.notes,
            userName: parsed.userName ?? defaults.userName,
            largeFontOn: parsed.largeFontOn ?? defaults.largeFontOn,
            hasCompletedOnboarding: parsed.hasCompletedOnboarding ?? defaults.hasCompletedOnboarding,
            userTier: parsed.userTier ?? defaults.userTier,
          });
        }
      } catch {
        // Use defaults if storage fails
      }
      setLoaded(true);
    })();
  }, []);

  // Debounced persist on state change — skip for guest (no progress saved)
  useEffect(() => {
    if (!loaded) return;
    if (state.userTier === 'guest') return;

    // Local persistence
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {});
    }, DEBOUNCE_MS);

    // Cloud sync (if signed in) — debounced at 3s to avoid excessive writes.
    // userTier is NOT included — it's admin-controlled in Firestore and must
    // never be overwritten by the client.
    if (firebaseUser) {
      if (cloudSyncRef.current) clearTimeout(cloudSyncRef.current);
      cloudSyncRef.current = setTimeout(() => {
        saveUserData(firebaseUser.uid, {
          lessons: state.lessons,
          stats: state.stats,
          savedLessonIds: state.savedLessonIds,
          notes: state.notes,
          userName: state.userName,
          largeFontOn: state.largeFontOn,
        }).catch(() => {});
      }, 3000);
    }

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (cloudSyncRef.current) clearTimeout(cloudSyncRef.current);
    };
  }, [state, loaded, firebaseUser]);

  // Update streak + weekly time reset — only after storage has loaded
  useEffect(() => {
    if (!loaded) return;
    const today = new Date().toISOString().split('T')[0];
    const currentWeek = getISOWeek();

    setState((prev) => {
      let { dayStreak, timeThisWeekMinutes, isoWeek, lastActiveDate } = prev.stats;
      let changed = false;

      // Reset weekly time if new ISO week
      if (isoWeek !== currentWeek) {
        timeThisWeekMinutes = 0;
        isoWeek = currentWeek;
        changed = true;
      }

      if (lastActiveDate !== today) {
        if (lastActiveDate === '') {
          // First ever app open — start streak at 1
          dayStreak = 1;
        } else {
          const lastDate = new Date(lastActiveDate + 'T00:00:00');
          const todayDate = new Date(today + 'T00:00:00');
          const diffDays = Math.round((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
          dayStreak = diffDays === 1 ? dayStreak + 1 : diffDays > 1 ? 1 : dayStreak;
        }
        lastActiveDate = today;
        changed = true;
      }

      if (!changed) return prev;
      return {
        ...prev,
        stats: { ...prev.stats, dayStreak, timeThisWeekMinutes, isoWeek, lastActiveDate },
      };
    });
  }, [loaded]);

  const startLesson = useCallback((lessonId: string) => {
    setState((prev) => {
      const existing = prev.lessons[lessonId];
      // Don't start locked or already-completed lessons
      if (!existing || existing.status === 'completed' || existing.status === 'locked') return prev;

      return {
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...existing,
            status: 'in_progress',
            startedAt: existing.startedAt || new Date().toISOString(),
            tabsViewed: existing.tabsViewed.includes('OVERVIEW')
              ? existing.tabsViewed
              : [...existing.tabsViewed, 'OVERVIEW'],
            progress: Math.max(existing.progress, TAB_PROGRESS_MAP.OVERVIEW),
          },
        },
      };
    });
  }, []);

  const markTabViewed = useCallback((lessonId: string, tab: string) => {
    setState((prev) => {
      const existing = prev.lessons[lessonId];
      // Don't record progress on locked or completed lessons
      if (!existing || existing.status === 'completed' || existing.status === 'locked') return prev;

      const tabsViewed = existing.tabsViewed.includes(tab)
        ? existing.tabsViewed
        : [...existing.tabsViewed, tab];

      const tabProgress = TAB_PROGRESS_MAP[tab] ?? 0;
      const progress = Math.max(existing.progress, tabProgress);

      return {
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...existing,
            status: 'in_progress',
            startedAt: existing.startedAt || new Date().toISOString(),
            tabsViewed,
            progress,
          },
        },
      };
    });
  }, []);

  const completeLesson = useCallback((lessonId: string) => {
    setState((prev) => {
      const existing = prev.lessons[lessonId];
      if (!existing) return prev;

      const wasAlreadyComplete = existing.status === 'completed';

      const newLessons = {
        ...prev.lessons,
        [lessonId]: {
          ...existing,
          status: 'completed' as LessonStatus,
          progress: 100,
          tabsViewed: ['OVERVIEW', 'TIMELINE', 'REFLECT', 'TAKEAWAYS'],
          completedAt: existing.completedAt || new Date().toISOString(),
        },
      };

      // Check if any locked lessons should now be unlocked
      const completedCount = Object.values(newLessons).filter((l) => l.status === 'completed').length;
      MOCK_LESSONS.forEach((ml) => {
        if (ml.is_locked && ml.unlock_after_count <= completedCount) {
          const lessonState = newLessons[ml.lesson_id];
          if (lessonState && lessonState.status === 'locked') {
            newLessons[ml.lesson_id] = { ...lessonState, status: 'new' };
          }
        }
      });

      return {
        ...prev,
        lessons: newLessons,
        stats: {
          ...prev.stats,
          casesCompleted: wasAlreadyComplete
            ? prev.stats.casesCompleted
            : prev.stats.casesCompleted + 1,
        },
      };
    });
  }, []);

  const toggleSaveLesson = useCallback((lessonId: string) => {
    setState((prev) => {
      const isSaved = prev.savedLessonIds.includes(lessonId);
      const existing = prev.lessons[lessonId];

      return {
        ...prev,
        savedLessonIds: isSaved
          ? prev.savedLessonIds.filter((id) => id !== lessonId)
          : [...prev.savedLessonIds, lessonId],
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...existing,
            savedAt: isSaved ? undefined : new Date().toISOString(),
          },
        },
      };
    });
  }, []);

  const getLessonProgress = useCallback(
    (lessonId: string): LessonProgress => {
      return (
        state.lessons[lessonId] ?? {
          status: 'new',
          progress: 0,
          tabsViewed: [],
        }
      );
    },
    [state.lessons],
  );

  const isLessonUnlocked = useCallback(
    (lessonId: string): boolean => {
      const lesson = MOCK_LESSONS.find((l) => l.lesson_id === lessonId);
      if (!lesson) return false;
      if (!lesson.is_locked) return true;
      return state.stats.casesCompleted >= lesson.unlock_after_count;
    },
    [state.stats.casesCompleted],
  );

  const addNote = useCallback((content: string, lessonId?: string, heading?: string): string => {
    // Enforce tier-based note limits
    const limit = MAX_NOTES[state.userTier];
    if (limit !== null && state.notes.length >= limit) {
      return ''; // At limit — cannot add
    }
    const now = new Date().toISOString();
    const noteId = `note_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const note: Note = {
      id: noteId,
      content,
      heading,
      lessonId,
      createdAt: now,
      updatedAt: now,
    };
    setState((prev) => ({
      ...prev,
      notes: [note, ...prev.notes],
    }));
    return noteId;
  }, [state.userTier, state.notes.length]);

  const updateNote = useCallback((noteId: string, content: string, heading?: string, lessonId?: string | null) => {
    setState((prev) => ({
      ...prev,
      notes: prev.notes.map((n) =>
        n.id === noteId
          ? {
              ...n,
              content,
              updatedAt: new Date().toISOString(),
              ...(heading !== undefined ? { heading } : {}),
              ...(lessonId !== undefined ? { lessonId: lessonId ?? undefined } : {}),
            }
          : n,
      ),
    }));
  }, []);

  const deleteNote = useCallback((noteId: string) => {
    setState((prev) => ({
      ...prev,
      notes: prev.notes.filter((n) => n.id !== noteId),
    }));
  }, []);

  const resetAllProgress = useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setState(getFreshState());
  }, []);

  const addReadingTime = useCallback((minutes: number) => {
    if (minutes <= 0) return;
    const today = new Date().toISOString().split('T')[0];
    setState((prev) => {
      let { dayStreak, lastActiveDate } = prev.stats;

      // Keep streak alive when user reads on a new day (covers mid-session day roll)
      if (lastActiveDate !== today && lastActiveDate !== '') {
        const lastDate = new Date(lastActiveDate + 'T00:00:00');
        const todayDate = new Date(today + 'T00:00:00');
        const diffDays = Math.round((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        dayStreak = diffDays === 1 ? dayStreak + 1 : diffDays > 1 ? 1 : dayStreak;
        lastActiveDate = today;
      }

      return {
        ...prev,
        stats: {
          ...prev.stats,
          dayStreak,
          lastActiveDate,
          timeThisWeekMinutes: prev.stats.timeThisWeekMinutes + minutes,
        },
      };
    });
  }, []);

  const setUserName = useCallback((name: string) => {
    setState((prev) => ({ ...prev, userName: name.trim() || 'Leader' }));
  }, []);

  const setLargeFont = useCallback((on: boolean) => {
    setState((prev) => ({ ...prev, largeFontOn: on }));
  }, []);

  const setUserTier = useCallback((tier: UserTier) => {
    setState((prev) => ({ ...prev, userTier: tier }));
  }, []);

  const completeOnboarding = useCallback(() => {
    setState((prev) => ({ ...prev, hasCompletedOnboarding: true }));
  }, []);

  /** Sign in with Google → upgrade to free/restore cloud state */
  const handleGoogleSignIn = useCallback(async (): Promise<boolean> => {
    const user = await signInWithGoogle();
    if (!user) return false; // User cancelled
    // Auth listener handles cloud data load & setFirebaseUser
    setState((prev) => ({
      ...prev,
      userName: user.displayName || prev.userName,
      userTier: prev.userTier === 'guest' ? 'free' : prev.userTier,
      hasCompletedOnboarding: true,
    }));
    return true;
  }, []);

  /** Sign out → save to cloud first, then clear local */
  const handleSignOut = useCallback(async (): Promise<void> => {
    try {
      // Save current state to cloud before signing out
      const user = auth().currentUser;
      const latest = stateRef.current;
      if (user) {
        await saveUserData(user.uid, {
          lessons: latest.lessons,
          stats: latest.stats,
          savedLessonIds: latest.savedLessonIds,
          notes: latest.notes,
          userName: latest.userName,
          largeFontOn: latest.largeFontOn,
          userTier: latest.userTier,
        });
      }
    } catch {
      // Continue sign-out even if final save fails
    }
    await authSignOut();
    await AsyncStorage.removeItem(STORAGE_KEY);
    setState(getFreshState());
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        loaded,
        firebaseUser,
        startLesson,
        markTabViewed,
        completeLesson,
        toggleSaveLesson,
        getLessonProgress,
        isLessonUnlocked,
        addNote,
        updateNote,
        deleteNote,
        addReadingTime,
        setUserName,
        setLargeFont,
        setUserTier,
        completeOnboarding,
        resetAllProgress,
        handleGoogleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
