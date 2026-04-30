// ─── APEX App State — Client-side persistence ─────────────────────────────────
// Manages lesson progress, completion, saves, and stats locally.
// Uses React Context + AsyncStorage for persistence across app restarts.

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { LessonStatus } from '../types/lesson';
import { MOCK_LESSONS } from '../data/mockLessons';

// ─── Types ────────────────────────────────────────────────────────────────────

interface LessonProgress {
  status: LessonStatus;
  progress: number; // 0–100
  tabsViewed: string[]; // which tabs have been visited
  savedAt?: string; // ISO date if saved
  completedAt?: string; // ISO date if completed
  startedAt?: string; // ISO date if started
}

interface AppState {
  lessons: Record<string, LessonProgress>;
  stats: {
    dayStreak: number;
    casesCompleted: number;
    timeThisWeekMinutes: number;
    lastActiveDate: string; // ISO date
  };
  savedLessonIds: string[];
}

interface AppContextValue {
  state: AppState;
  startLesson: (lessonId: string) => void;
  markTabViewed: (lessonId: string, tab: string) => void;
  completeLesson: (lessonId: string) => void;
  toggleSaveLesson: (lessonId: string) => void;
  getLessonProgress: (lessonId: string) => LessonProgress;
  isLessonUnlocked: (lessonId: string) => boolean;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = '@apex_app_state';

const TAB_PROGRESS_MAP: Record<string, number> = {
  OVERVIEW: 25,
  TIMELINE: 50,
  REFLECT: 75,
  TAKEAWAYS: 100,
};

function getDefaultState(): AppState {
  const lessons: Record<string, LessonProgress> = {};
  MOCK_LESSONS.forEach((l) => {
    lessons[l.lesson_id] = {
      status: l.status as LessonStatus,
      progress: l.progress ?? 0,
      tabsViewed: l.status === 'completed' ? ['OVERVIEW', 'TIMELINE', 'REFLECT', 'TAKEAWAYS'] : [],
      savedAt: undefined,
      completedAt: l.status === 'completed' ? new Date().toISOString() : undefined,
      startedAt: l.status === 'in_progress' || l.status === 'completed' ? new Date().toISOString() : undefined,
    };
  });

  return {
    lessons,
    stats: {
      dayStreak: 7,
      casesCompleted: MOCK_LESSONS.filter((l) => l.status === 'completed').length,
      timeThisWeekMinutes: 83,
      lastActiveDate: new Date().toISOString().split('T')[0],
    },
    savedLessonIds: [],
  };
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AppContext = createContext<AppContextValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(getDefaultState);

  // Load persisted state on mount
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as AppState;
          setState(parsed);
        }
      } catch {
        // Use defaults if storage fails
      }
    })();
  }, []);

  // Persist state on every change
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {});
  }, [state]);

  // Update streak on app open
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (state.stats.lastActiveDate !== today) {
      const lastDate = new Date(state.stats.lastActiveDate);
      const todayDate = new Date(today);
      const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

      setState((prev) => ({
        ...prev,
        stats: {
          ...prev.stats,
          lastActiveDate: today,
          dayStreak: diffDays === 1 ? prev.stats.dayStreak + 1 : diffDays > 1 ? 1 : prev.stats.dayStreak,
        },
      }));
    }
  }, []);

  const startLesson = useCallback((lessonId: string) => {
    setState((prev) => {
      const existing = prev.lessons[lessonId];
      if (!existing || existing.status === 'completed') return prev;

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
      if (!existing || existing.status === 'completed') return prev;

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

  return (
    <AppContext.Provider
      value={{
        state,
        startLesson,
        markTabViewed,
        completeLesson,
        toggleSaveLesson,
        getLessonProgress,
        isLessonUnlocked,
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
