# APEX Leadership — Google Play Store Publishing Audit

> **Last updated:** May 3, 2026
> **Package:** `com.apex.leadership`
> **Version:** 1.0.0 (versionCode 1)
> **Firebase project:** `apex-leadership-2b72a`

---

## 1. GOOGLE PLAY CONSOLE SETUP

### 1.1 Developer Account
| Item | Status | Action |
|------|--------|--------|
| Google Play Developer account ($25 one-time) | ❓ | Register at [play.google.com/console](https://play.google.com/console) if not already done |
| Developer profile (name, address, email) | ❓ | Complete in Play Console → Settings → Developer account |
| Developer email (public) | ❓ | Set a public contact email (e.g. apex.leadership.app@gmail.com) |

### 1.2 App Listing (Store Presence)
| Item | Status | Notes |
|------|--------|-------|
| App name | ✅ | "APEX Leadership" (max 30 chars) |
| Short description | ❌ NEEDED | Max 80 chars. Suggestion: "Learn to lead from history's boldest decisions — distilled into short case studies." |
| Full description | ❌ NEEDED | Max 4000 chars. Write a compelling description covering features, content, and tier system |
| App icon (512x512 PNG, 32-bit) | ❌ NEEDED | Export from adaptive-foreground on solid #050505 background. Must not be alpha-trimmed |
| Feature graphic (1024x500 PNG/JPG) | ❌ NEEDED | Required. Dark themed banner with APEX branding |
| Phone screenshots (min 2, 16:9 or 9:16) | ❌ NEEDED | At least 2, recommended 4-8. Show: Home, PathScreen, Lesson, Notes |
| 7" tablet screenshots | ❌ NEEDED | At least 1. Resize phone screenshots if no tablet layout |
| 10" tablet screenshots | ❌ NEEDED | At least 1 |
| App category | ❌ NEEDED | Primary: Education. Secondary: Books & Reference |
| Content rating | ❌ NEEDED | Complete IARC questionnaire in Play Console |
| Contact email | ❌ NEEDED | Set to public support email |
| Privacy policy URL | ✅ | https://apex-leadership-2b72a.web.app/privacy-policy |

---

## 2. APP SIGNING & BUILD

### 2.1 Release Signing Key
| Item | Status | Action |
|------|--------|--------|
| Upload keystore created | ❌ NEEDED | Generate: `keytool -genkey -v -keystore apex-upload.keystore -alias apex -keyalg RSA -keysize 2048 -validity 10000` |
| Keystore stored securely (NOT in git) | ❌ NEEDED | Store in a secure, backed-up location. If lost, you cannot update the app |
| `android/app/build.gradle` release signing config | ❌ NEEDED | Currently uses debug keystore for release builds. Must configure release signing |
| Google Play App Signing enrolled | ❌ NEEDED | Recommended: let Google manage the app signing key, you keep the upload key |

### 2.2 Release Build
| Item | Status | Action |
|------|--------|--------|
| `.env` / secrets not hardcoded | ⚠️ CHECK | Web client ID is in authService.ts — acceptable for client-side OAuth. API key in google-services.json is normal |
| ProGuard / R8 enabled | ✅ | `minifyEnabled enableProguardInReleaseBuilds` is set in build.gradle |
| Hermes enabled | ✅ | Default for Expo 51 |
| Release APK/AAB builds successfully | ❌ NOT TESTED | Run: `cd android && ./gradlew bundleRelease` |
| AAB file size < 150MB | ❓ | Check after build. Should be ~20-40MB for this app |
| Version code strategy decided | ❌ NEEDED | Increment versionCode for each upload. Use versionCode = 1 for first release |

### 2.3 Build Commands
```bash
# Generate release AAB (required for Play Store)
cd android
./gradlew bundleRelease

# Output at: android/app/build/outputs/bundle/release/app-release.aab
```

---

## 3. FIREBASE & BACKEND

### 3.1 Firebase Configuration
| Item | Status | Action |
|------|--------|--------|
| Firebase project created | ✅ | `apex-leadership-2b72a` |
| google-services.json in project | ✅ | At project root + copied to android/app/ by prebuild |
| Firebase Auth (Google) enabled | ✅ | Google provider active |
| Cloud Firestore created | ✅ | Production mode |
| Firestore security rules deployed | ✅ | Users can only read/write own doc |
| Firebase Hosting deployed | ✅ | Privacy + Terms pages live |
| Debug SHA-1 added to Firebase | ✅ | `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25` |
| **Release SHA-1 added to Firebase** | ❌ NEEDED | After generating release keystore, add its SHA-1 to Firebase Console |
| **Google Play App Signing SHA-1** | ❌ NEEDED | After uploading to Play Console, get the app signing certificate SHA-1 from Play Console → Setup → App signing, then add to Firebase |

### 3.2 Firebase Security Checklist
| Item | Status | Action |
|------|--------|--------|
| Firestore rules restrict access | ✅ | Only authenticated users can access their own doc |
| No admin SDK exposed to client | ✅ | Client uses standard Firebase SDK |
| API keys restricted | ⚠️ RECOMMENDED | In Google Cloud Console, restrict the Android API key to your app's package name + SHA-1 |
| Firebase Auth providers limited | ✅ | Only Google Sign-In enabled |

---

## 4. IN-APP PURCHASES (PRO TIER)

### 4.1 Google Play Billing
| Item | Status | Action |
|------|--------|--------|
| `react-native-iap` installed | ❌ NOT DONE | Install when ready to implement IAP |
| One-time product created in Play Console | ❌ NOT DONE | Create product ID: `apex_pro_lifetime` |
| Purchase flow implemented | ❌ NOT DONE | ProScreen currently shows "Coming Soon" alert |
| Purchase verification (server-side) | ❌ NOT DONE | Verify purchase token via Google Play Developer API or Firebase Functions |
| Purchase restoration | ❌ NOT DONE | Restore pro access on new device after sign-in |
| Test IAP with license testers | ❌ NOT DONE | Add test accounts in Play Console |

> **Note:** IAP is NOT required for initial release. You can launch with guest + free tiers and add Pro later.

---

## 5. POLICIES & COMPLIANCE

### 5.1 Google Play Policies
| Item | Status | Action |
|------|--------|--------|
| Privacy policy hosted | ✅ | https://apex-leadership-2b72a.web.app/privacy-policy |
| Privacy policy covers all data collection | ✅ | Google profile, progress, notes |
| Terms of use hosted | ✅ | https://apex-leadership-2b72a.web.app/terms-of-use |
| Data safety form completed | ❌ NEEDED | Fill out in Play Console → Policy → App content → Data safety |
| Ads declaration | ✅ | No ads — declare "No" in Play Console |
| Content rating questionnaire | ❌ NEEDED | Complete IARC rating in Play Console |
| Target audience declaration | ❌ NEEDED | App is NOT for children under 13. Select "18+" or "Everyone" based on content |
| Government apps declaration | ✅ | Not applicable |
| Financial features declaration | ⚠️ CHECK | If IAP is added, declare appropriately |
| App access (login required?) | ⚠️ NEEDED | Provide test credentials or mark as "no special access needed" (guest mode works) |

### 5.2 Content Review
| Item | Status | Action |
|------|--------|--------|
| No copyrighted content | ⚠️ CHECK | Case studies reference real companies (Netflix, Microsoft, Apple, etc.). Ensure content is editorial/educational, not copied verbatim |
| Company logos not used | ✅ | App uses text-based design, no company logos |
| "Not affiliated" disclaimer | ⚠️ RECOMMENDED | Add disclaimer in app description and Terms: "Not affiliated with or endorsed by companies discussed" |
| No trademark violations | ⚠️ CHECK | Company names in educational context = fair use, but review each case study title |

---

## 6. TECHNICAL REQUIREMENTS

### 6.1 Android Requirements
| Item | Status | Action |
|------|--------|--------|
| Target SDK 34 (Android 14) | ✅ | `targetSdkVersion 34` in build.gradle |
| Min SDK 23 (Android 6.0) | ✅ | Covers 97%+ of devices |
| 64-bit support | ✅ | React Native + Hermes provides this by default |
| Permissions declared | ✅ | Only INTERNET (implicit) |
| No unnecessary permissions | ✅ | Clean permission set |

### 6.2 App Quality
| Item | Status | Action |
|------|--------|--------|
| App doesn't crash on launch | ❌ NOT TESTED | Test on physical device |
| Back button works correctly | ❌ NOT TESTED | Test all navigation flows |
| Screen rotation handled | ✅ | Locked to portrait in app.config.ts |
| Keyboard doesn't cover inputs | ❌ NOT TESTED | Test AuthScreen name input, NoteEditor, SearchBar |
| Dark theme consistent | ✅ | All screens use Colors.bgPrimary (#050505) |
| No ANR (App Not Responding) | ❌ NOT TESTED | Ensure no blocking operations on main thread |
| Memory leaks checked | ❌ NOT TESTED | Watch for useEffect cleanup issues |

### 6.3 Known Issues to Fix Before Release
| Issue | Severity | File | Fix |
|-------|----------|------|-----|
| Pro tier purchase not implemented | Medium | ProScreen.tsx | Can launch without Pro — add IAP later |
| `as any` navigation casts | Low | Multiple screens | Type-safe but uses casts for cross-stack nav |
| Silent error handling | Low | authService, firestoreService | Add error logging/alerts |
| No offline-first sync | Low | AppState.tsx | AsyncStorage works offline; Firestore syncs when online |
| No analytics/crash reporting | Medium | — | Add Firebase Crashlytics before production |

---

## 7. RELEASE CHECKLIST (ORDERED)

### Phase 1: Pre-Build
- [ ] Generate release keystore and store securely
- [ ] Configure release signing in `android/app/build.gradle`
- [ ] Add release SHA-1 to Firebase Console
- [ ] Test Google Sign-In with release build
- [ ] Test all screens and navigation flows on physical device

### Phase 2: Build
- [ ] Run `npx expo prebuild --platform android --clean`
- [ ] Run `cd android && ./gradlew bundleRelease`
- [ ] Verify AAB file size < 150MB
- [ ] Test AAB on device using `bundletool`

### Phase 3: Play Console Setup
- [ ] Create app in Google Play Console
- [ ] Upload AAB to internal testing track first
- [ ] Complete store listing (name, descriptions, screenshots, graphics)
- [ ] Complete content rating questionnaire
- [ ] Complete data safety form
- [ ] Set pricing (Free) and country distribution
- [ ] Add privacy policy URL

### Phase 4: Testing
- [ ] Internal test with 2-3 people
- [ ] Test guest → free → sign-in flow
- [ ] Test offline behavior
- [ ] Test app install → uninstall → reinstall → sign-in (data restoration)
- [ ] Test on Android 8, 10, 12, 14 if possible

### Phase 5: Launch
- [ ] Promote from internal testing → production
- [ ] Set rollout percentage (start with 20%)
- [ ] Monitor crashes in Play Console + Firebase Crashlytics
- [ ] Respond to any policy issues within 7 days

### Phase 6: Post-Launch
- [ ] Add Firebase Crashlytics for crash reporting
- [ ] Implement Pro tier IAP when ready
- [ ] Add analytics (Firebase Analytics) for funnel tracking
- [ ] Monitor user reviews and ratings

---

## 8. ASSETS NEEDED

| Asset | Spec | Status |
|-------|------|--------|
| App icon (Play Store) | 512×512 PNG, 32-bit, no alpha | ❌ NEEDED |
| Feature graphic | 1024×500 PNG or JPG | ❌ NEEDED |
| Phone screenshots | 1080×1920 or 1440×2560, min 2 | ❌ NEEDED |
| 7" tablet screenshots | 1200×1920, min 1 | ❌ NEEDED |
| 10" tablet screenshots | 1600×2560, min 1 | ❌ NEEDED |
| Short description | Max 80 characters | ❌ NEEDED |
| Full description | Max 4000 characters | ❌ NEEDED |
| Release keystore | .keystore file + password | ❌ NEEDED |

---

## 9. ESTIMATED TIMELINE

| Phase | Duration |
|-------|----------|
| Generate keystore + configure release build | 1 session |
| Create store assets (icon, screenshots, graphics) | 1-2 sessions |
| Complete Play Console forms | 1 session |
| Internal testing + bug fixes | 2-3 sessions |
| Review approval (Google) | 1-7 days |
| **Total to first internal test** | **~3-4 sessions** |
| **Total to production release** | **~1-2 weeks** |

---

## 10. QUICK REFERENCE COMMANDS

```bash
# Generate release keystore
keytool -genkey -v -keystore apex-upload.keystore -alias apex -keyalg RSA -keysize 2048 -validity 10000

# Get SHA-1 from release keystore
keytool -list -v -keystore apex-upload.keystore -alias apex

# Prebuild (after any native config change)
npx expo prebuild --platform android --clean

# Build release AAB
cd android && ./gradlew bundleRelease

# Build debug APK (for testing)
cd android && ./gradlew assembleDebug

# Deploy Firebase rules
firebase deploy --only firestore:rules --project apex-leadership-2b72a

# Deploy hosting
firebase deploy --only hosting --project apex-leadership-2b72a
```
