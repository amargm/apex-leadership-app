# APEX — Production Audit & Backend Requirements

> **Generated:** May 2026 · **Status:** Pre-publish review  
> Covers: static/preview artefacts, client-side logic gaps, Google backend requirements

---

## SECTION 1 — STATIC / PREVIEW / MOCK DATA (Must Fix Before Publish)

Everything below exists **only for demo/development purposes** and will break the real user experience if shipped as-is.

### 1.1 Fake Default Stats

| Item | Value | Location |
|------|-------|----------|
| `dayStreak` | **7** (should be 0) | `AppState.tsx → getDefaultState()` |
| `timeThisWeekMinutes` | **83** (should be 0) | `AppState.tsx → getDefaultState()` |
| `casesCompleted` | Count of mock "completed" lessons | `AppState.tsx → getDefaultState()` |

**Impact:** A brand-new user opens the app and sees "7 day streak · 83 min this week" before doing anything.

**Fix:** Change `getDefaultState()` to mirror `getFreshState()` — all stats start at 0. Remove or guard the fallback so fresh installs get clean zeros.

---

### 1.2 Hardcoded User Identity

| Item | Current Value | Location |
|------|---------------|----------|
| Greeting | "Good morning, **Leader**" | `HomeScreen.tsx` line ~114 |
| Profile name | "**Leader**" | `ProfileScreen.tsx` |
| Profile role | "Team Lead · APEX Member" | `ProfileScreen.tsx` |
| Avatar initial | "L" | `ProfileScreen.tsx` |

**Impact:** Every user sees the same generic name everywhere.

**Fix:** Add `userName` and `userRole` to `AppState`, persist them, and source them in Home + Profile. (Can default to "Leader" until onboarding is built.)

---

### 1.3 Hardcoded Daily Quote

```
"The task of leadership is not to put greatness into people,
 but to elicit it, for the greatness is there already."
 — John Buchan
```

**Location:** `HomeScreen.tsx` lines ~172–177

**Impact:** Same quote every single day, forever.

**Fix (client-only option):** Create a `dailyQuotes.ts` array of 30–50 quotes. Pick one based on day-of-year (`new Date().getDate() % quotes.length`). No backend needed.

**Fix (backend option):** Fetch from Firestore `quotes` collection, rotate server-side.

---

### 1.4 Fake Push Notification

```ts
export const MOCK_NOTIFICATION: PushNotification = {
  id: 'n001',
  title: 'New Case Study Available',
  body: 'The Toyota Production System — a masterclass in servant leadership.',
  sent_at: new Date().toISOString(), // always "just now"
};
```

**Location:** `mockLessons.ts`, shown on every HomeScreen mount.

**Impact:** User sees a fake notification banner every time they open the app.

**Fix:** Remove `MOCK_NOTIFICATION` entirely. Replace with real push notification system (see Section 3) or remove the notification panel until push is wired.

---

### 1.5 Active Case Corner Index

```tsx
<Text style={styles.activeCaseCornerIndex}>L002</Text>
```

**Location:** `HomeScreen.tsx` — inside the active case resume block.

**Impact:** Always shows "L002" regardless of which lesson is actually in progress.

**Fix:** Compute dynamically: `L${String(MOCK_LESSONS.indexOf(activeCase) + 1).padStart(3, '0')}`

---

### 1.6 Locked Lessons with Placeholder Content

| Lesson | Content |
|--------|---------|
| L004 — Intel Strategic Inflection | `situation: 'Placeholder — unlock after completing 3 lessons.'`, all tab arrays empty |
| L015 — Stripe Writing Culture | `situation: 'Unlock after completing 5 case studies.'`, all tab arrays empty |
| L016 — Eisenhower D-Day | `situation: 'Unlock after completing 8 case studies.'`, all tab arrays empty |

**Location:** `mockLessons.ts`

**Impact:** If a user unlocks these lessons, they see a completely blank case study.

**Fix:** Write full case study content for all three, or keep them locked and hide the unlock mechanism until content is ready.

---

### 1.7 Mock Data Export (Dead Code)

```ts
export const MOCK_USER_STATS: UserStats = { ... }
```

**Location:** `mockLessons.ts`

**Impact:** Only consumed by `WinsScreen` which is unreachable. Dead code in the bundle.

**Fix:** Delete `MOCK_USER_STATS` export and the `UserStats` type if not used elsewhere.

---

### 1.8 Historical Data Error

**L001 (Netflix) timeline:** "Netflix lays off 130 of 120 staff" — mathematically impossible.

**Fix:** Correct to "Netflix lays off ~100 of 400 staff" or whatever the accurate figure is.

---

## SECTION 2 — CLIENT-SIDE LOGIC GAPS (Fix Before or At Launch)

### 2.1 CRITICAL — Profile Toggles Not Persisted

All four toggles in ProfileScreen are **local `useState`** — they reset to defaults every time the screen mounts.

| Toggle | Default | Functional? | Persisted? |
|--------|---------|-------------|------------|
| Notifications | `true` | ❌ No | ❌ No |
| Daily Reminder | `true` | ❌ No | ❌ No |
| Larger Reading Font | `false` | ❌ No | ❌ No |
| Dark Mode | `true` | ❌ No (always dark) | ❌ No |

**Fix options:**

| Option | Effort | Recommendation |
|--------|--------|----------------|
| **Remove non-functional toggles** (Notifications, Daily Reminder, Dark Mode) | Low | ✅ Best for v1. Ship only what works. |
| **Wire "Larger Reading Font"** — add `fontScale` to AppState, multiply `fontSize` in reading components | Medium | Nice to have for v1 |
| **Persist all toggles** in AppState even if UI effect isn't built yet | Low | Minimum if you keep them visible |

---

### 2.2 CRITICAL — `timeThisWeekMinutes` Never Tracked

The "THIS WEEK" readout on HomeScreen shows a number that never changes (defaults to 83, or 0 after reset). No timer or session tracking code exists anywhere.

**Fix:** Add reading session tracking to `LessonDetailScreen`:
- Record `sessionStartTime` on screen focus
- On blur/unmount, compute `elapsed = Date.now() - sessionStartTime`
- Call `addReadingTime(elapsed)` in AppState
- AppState accumulates into `timeThisWeekMinutes` and resets weekly (check if `lastActiveDate` is in a different ISO week)

---

### 2.3 CRITICAL — `timeThisWeekMinutes` Never Resets Weekly

Even if you start tracking time, there's no logic to reset the counter when a new week starts.

**Fix:** In the streak `useEffect`, also check if the current ISO week differs from the stored week. If so, reset `timeThisWeekMinutes` to 0.

---

### 2.4 HIGH — Missing Font: `DMSans_600SemiBold`

`FontFamily.dmSansSemiBold` is defined in `typography.ts` and used by `TakeawayItem` (headline) and `HomeScreen` (resumeLabel), but the font is **never loaded** in `App.tsx`.

**Impact:** Those text elements silently fall back to system font, breaking the design.

**Fix:** Add to `useFonts()` in `App.tsx`:
```ts
import { DMSans_600SemiBold } from '@expo-google-fonts/dm-sans';
// ...
useFonts({ ..., DMSans_600SemiBold });
```

---

### 2.5 HIGH — WinsScreen is Dead Code

`WinsScreen.tsx` exists but is not in any navigator. It also uses `MOCK_USER_STATS` instead of `useAppState()`.

**Fix:** Either:
- Wire it into ProfileScreen ("Reading History" → WinsScreen) and refactor to use `useAppState()`, OR
- Delete it entirely for v1

---

### 2.6 HIGH — Profile Navigation Rows Go Nowhere

| Row | Expected Destination | Current State |
|-----|---------------------|---------------|
| Reading History | WinsScreen or history list | `onPress` missing |
| Saved Lessons | SavedScreen | `onPress` missing |
| About APEX | Info modal/screen | `onPress` missing |
| Privacy Policy | WebView or external URL | `onPress` missing |
| Terms of Use | WebView or external URL | `onPress` missing |

**Fix for v1:**
- "Saved Lessons" → navigate to existing `SavedScreen`
- "Reading History" → wire to WinsScreen or a simple list
- "About APEX" → show an `Alert` with version/credits
- "Privacy Policy" / "Terms of Use" → `Linking.openURL()` to hosted pages (you'll need these for Play Store)

---

### 2.7 MEDIUM — `emotional_intelligence` Module Has Zero Lessons

The module is defined in `modules.ts` but no lesson in `mockLessons.ts` uses `module: 'emotional_intelligence'`.

**Fix:** Write at least 1 lesson for this module, or remove it from `MODULES` array for v1.

---

### 2.8 MEDIUM — `LessonListItem` Reads Stale Status

`LessonListItem` reads `lesson.status` and `lesson.progress` from the **static Lesson object** in `mockLessons.ts`, not from `AppState`. If a user progresses through a lesson, the list item won't reflect the updated status.

**Fix:** Pass `progress` and `status` as props from the parent (which reads from `useAppState()`), or read AppState inside the component.

---

### 2.9 MEDIUM — Streak Logic Race Condition

The streak `useEffect` runs on mount with `[]` deps but reads `state.stats.lastActiveDate`. If AsyncStorage hasn't loaded yet, it may read the default value and incorrectly reset the streak.

**Fix:** Add a `loaded` flag to AppState. Only run streak logic after `loaded === true`.

---

### 2.10 MEDIUM — No Error Boundary

If any screen throws, the entire app crashes to a white screen.

**Fix:** Wrap `<AppNavigator />` in a React error boundary component with a "Something went wrong" fallback + restart button.

---

### 2.11 LOW — AsyncStorage Writes Not Debounced

Every `setState` triggers an `AsyncStorage.setItem()` in the `useEffect`. Rapid actions (e.g., switching tabs quickly) cause excessive writes.

**Fix:** Debounce the `useEffect` that persists state (300-500ms delay).

---

### 2.12 LOW — `getModule()` Non-Null Assertion

```ts
return MODULES.find(m => m.key === key)!;
```

Crashes at runtime if called with an invalid key.

**Fix:** Return `undefined` or throw a descriptive error.

---

### 2.13 LOW — `app.config.ts` Issues

| Issue | Current | Should Be |
|-------|---------|-----------|
| `backgroundColor` | `#0A0A0A` | `#050505` (matches theme) |
| `extra.eas.projectId` | `''` (empty) | Your actual EAS project ID |
| No `ios` block | missing | Add `bundleIdentifier` if ever targeting iOS |
| No `icon` / `adaptiveIcon` | missing | Required for Play Store |
| No `splash` config | missing | Need splash screen asset |

---

## SECTION 3 — BACKEND REQUIREMENTS (Google Products)

Below is everything the app needs from a backend, mapped to the recommended Google product for each.

---

### 3.1 Firebase Authentication

**Why:** User identity for profile, cross-device sync, and any social features.

| Need | Google Product | Details |
|------|---------------|---------|
| User sign-up/login | **Firebase Auth** | Google Sign-In + email/password |
| User profile (name, role) | Firebase Auth custom claims or Firestore | Store `displayName`, `role`, avatar URL |
| Anonymous → authenticated upgrade | Firebase Auth anonymous auth | Let users start without signup, convert later |

**Client changes:**
- Install `@react-native-firebase/auth` or `expo-auth-session` (for Expo managed)
- Add AuthContext wrapper
- Replace hardcoded "Leader" with `auth.currentUser.displayName`
- Gate certain features (sharing, notes sync) behind auth

---

### 3.2 Cloud Firestore

**Why:** Store and sync user data, deliver content without app updates.

| Collection | Purpose | Read/Write |
|------------|---------|------------|
| `users/{uid}` | Profile, settings, preferences (toggle states) | Read + Write |
| `users/{uid}/progress` | Lesson progress, stats, streaks | Read + Write |
| `users/{uid}/notes` | User notes (synced across devices) | Read + Write |
| `lessons` | Case study content (all 16+ lessons) | Read-only from client |
| `modules` | Module definitions | Read-only from client |
| `quotes` | Daily quote rotation pool | Read-only from client |

**Key benefits:**
- **Content updates without app store review** — add/edit case studies in Firestore, app fetches latest
- **Cross-device sync** — user signs in on new phone, all progress/notes are there
- **Offline support** — Firestore has built-in offline persistence

**Client changes:**
- Install `@react-native-firebase/firestore`
- Replace `MOCK_LESSONS` array with Firestore reads (with offline cache)
- Replace `AsyncStorage` persistence with Firestore writes
- Keep AsyncStorage as local cache / fallback

**Firestore Security Rules (starter):**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    // Lessons and modules are read-only for authenticated users
    match /lessons/{lessonId} {
      allow read: if request.auth != null;
    }
    match /modules/{moduleId} {
      allow read: if request.auth != null;
    }
    match /quotes/{quoteId} {
      allow read: if request.auth != null;
    }
  }
}
```

---

### 3.3 Firebase Cloud Messaging (FCM)

**Why:** Push notifications — new case studies, daily reminders, streak nudges.

| Notification Type | Trigger | Backend Logic |
|-------------------|---------|---------------|
| New case study available | Admin publishes to Firestore | Cloud Function watches `lessons` collection |
| Daily reminder | User's preferred time | Cloud Scheduler + Cloud Function |
| Streak at risk | No activity for 24h+ | Cloud Function checks `lastActiveDate` |
| Weekly summary | Every Sunday | Cloud Scheduler + Cloud Function |

**Client changes:**
- Install `@react-native-firebase/messaging`
- Request notification permission on onboarding
- Store FCM token in `users/{uid}/fcmTokens`
- Remove `MOCK_NOTIFICATION` — replace with real incoming push
- Wire the "Notifications" and "Daily Reminder" toggles to write preferences to Firestore

---

### 3.4 Cloud Functions for Firebase

**Why:** Server-side logic that can't live on the client.

| Function | Trigger | Purpose |
|----------|---------|---------|
| `onNewLesson` | Firestore `onCreate` on `lessons/` | Send push notification to all users |
| `dailyReminder` | Cloud Scheduler (cron) | Send reminder to users who opted in |
| `streakCheck` | Cloud Scheduler (daily 1am) | Detect broken streaks, send nudge |
| `weeklySummary` | Cloud Scheduler (Sunday) | Compile and send weekly digest |
| `computeStats` | Firestore `onWrite` on `users/{uid}/progress` | Recalculate streak, completion count server-side (source of truth) |

**Setup:** `firebase init functions` → TypeScript Cloud Functions v2

---

### 3.5 Firebase Analytics + Google Analytics

**Why:** Understand user behavior, measure engagement, required data for app store optimization.

| Event | When | Parameters |
|-------|------|------------|
| `lesson_started` | User opens a case study | `lesson_id`, `module` |
| `lesson_completed` | User finishes all tabs | `lesson_id`, `module`, `time_spent` |
| `tab_viewed` | User switches to a tab | `lesson_id`, `tab_name` |
| `note_created` | User creates a note | `lesson_id` (if linked) |
| `share_image` | User shares a case study | `lesson_id` |
| `app_opened` | App comes to foreground | `day_streak` |

**Client changes:**
- Install `@react-native-firebase/analytics`
- Add `analytics().logEvent(...)` calls at key interaction points
- Set user properties: `role`, `cases_completed`, `streak`

---

### 3.6 Firebase Remote Config

**Why:** Feature flags, A/B testing, content control without app updates.

| Flag | Purpose |
|------|---------|
| `max_free_lessons` | Control freemium gate (e.g., 5 free) |
| `show_onboarding` | Toggle onboarding flow |
| `daily_quote_id` | Override daily quote from server |
| `feature_spaced_repetition` | Gate unreleased features |
| `maintenance_mode` | Show maintenance screen |

---

### 3.7 Cloud Storage for Firebase

**Why:** Store and serve media assets.

| Asset | Purpose |
|-------|---------|
| Case study header images | If you add per-case illustrations |
| User-generated share images | Optional: store shared PNGs for link sharing |
| Audio narrations | Future: commute-friendly audio versions |

---

### 3.8 Google Play Console Requirements

Before publishing, these items are required by Google:

| Requirement | Status | Action |
|-------------|--------|--------|
| App icon (512×512 PNG) | ❌ Missing | Design and add to `app.config.ts` |
| Feature graphic (1024×500) | ❌ Missing | Design for Play Store listing |
| Screenshots (phone + tablet) | ❌ Missing | Capture from working app |
| Privacy Policy URL | ❌ Missing | Host on Firebase Hosting or Google Sites |
| Terms of Use URL | ❌ Missing | Host alongside privacy policy |
| Content rating questionnaire | ❌ Not done | Fill out in Play Console |
| Target audience declaration | ❌ Not done | "Not designed for children" |
| Data safety form | ❌ Not done | Declare what data you collect |
| EAS Project ID | ❌ Empty in `app.config.ts` | Run `eas init` to generate |
| Signing key | ❌ Not set up | EAS handles this, or upload your own |
| `versionCode` | Set to `1` ✅ | Increment for each release |

---

### 3.9 Firebase Hosting

**Why:** Host static pages required for publishing.

| Page | Purpose |
|------|---------|
| `privacy-policy.html` | Required by Play Store |
| `terms-of-use.html` | Required by Play Store |
| `about.html` | Optional: "About APEX" content |
| `support.html` | Play Store requires a support URL |

**Setup:** `firebase init hosting` → deploy static HTML pages.

---

## SECTION 4 — RECOMMENDED LAUNCH ORDER

### Phase 1: Fix What's Broken (Ship-blocking)

| # | Task | Effort |
|---|------|--------|
| 1 | Fix `getDefaultState()` — all stats start at 0 | 5 min |
| 2 | Fix hardcoded "L002" in active case block | 5 min |
| 3 | Load `DMSans_600SemiBold` in App.tsx | 5 min |
| 4 | Fix L001 timeline data error | 5 min |
| 5 | Write full content for L004, L015, L016 (or hide them) | 2-4 hrs |
| 6 | Remove `MOCK_NOTIFICATION` panel (or make it dismissable-persistent) | 15 min |
| 7 | Remove or hide non-functional toggles (Dark Mode, Notifications, Daily Reminder) | 15 min |
| 8 | Fix `LessonListItem` to read from AppState | 30 min |
| 9 | Fix `app.config.ts` (backgroundColor, icon, splash) | 30 min |
| 10 | Add at least 1 lesson for `emotional_intelligence` module | 1-2 hrs |

### Phase 2: Client Logic Completion

| # | Task | Effort |
|---|------|--------|
| 1 | Add reading time tracking | 1 hr |
| 2 | Add weekly time reset logic | 30 min |
| 3 | Wire "Saved Lessons" profile row → SavedScreen | 15 min |
| 4 | Wire "Larger Reading Font" toggle with persistence | 1 hr |
| 5 | Add user name to AppState + display in Home/Profile | 30 min |
| 6 | Add daily quote rotation (local array) | 30 min |
| 7 | Fix streak race condition (add `loaded` flag) | 30 min |
| 8 | Add error boundary | 30 min |
| 9 | Debounce AsyncStorage writes | 15 min |
| 10 | Delete WinsScreen or wire it | 15 min |

### Phase 3: Google Backend Setup

| # | Task | Google Product |
|---|------|---------------|
| 1 | Create Firebase project | Firebase Console |
| 2 | Add Android app to Firebase (`com.apex.leadership`) | Firebase Console |
| 3 | Download `google-services.json` → `android/app/` | Firebase Console |
| 4 | Set up Firebase Auth (Google Sign-In + email) | Firebase Auth |
| 5 | Create Firestore collections (users, lessons, modules, quotes) | Cloud Firestore |
| 6 | Migrate `mockLessons.ts` content into Firestore `lessons` collection | Script / manual |
| 7 | Write Firestore security rules | Firestore Rules |
| 8 | Set up FCM for push notifications | Cloud Messaging |
| 9 | Write Cloud Functions (daily reminder, streak check) | Cloud Functions |
| 10 | Set up Firebase Analytics | Firebase Analytics |
| 11 | Set up Remote Config with feature flags | Remote Config |
| 12 | Host privacy policy + terms on Firebase Hosting | Firebase Hosting |
| 13 | Run `eas init` and configure EAS project ID | EAS CLI |
| 14 | Build production APK/AAB via `eas build` | EAS Build |
| 15 | Submit to Google Play Console | Play Console |

---

## SECTION 5 — GOOGLE PRODUCTS SUMMARY

| Product | Free Tier | What You Use It For |
|---------|-----------|---------------------|
| **Firebase Auth** | 10K MAU free | User login, identity |
| **Cloud Firestore** | 1GB storage, 50K reads/day, 20K writes/day | All data storage & sync |
| **Cloud Functions** | 2M invocations/month | Server logic, notifications |
| **Cloud Messaging (FCM)** | Unlimited | Push notifications |
| **Firebase Analytics** | Unlimited | User behavior tracking |
| **Remote Config** | Unlimited | Feature flags |
| **Cloud Storage** | 5GB | Media assets |
| **Firebase Hosting** | 10GB transfer/month | Privacy policy, terms pages |

**Estimated cost at <1000 MAU: $0/month** (all within free tier).

---

*This document should be updated as items are resolved. Check off completed items and re-audit before each release.*
