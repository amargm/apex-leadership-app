# Firebase Google Sign-In — Complete Configuration Reference

## Project Details

| Field | Value |
|-------|-------|
| Firebase Project ID | `apex-leadership-2b72a` |
| Project Number | `784410364707` |
| Android Package Name | `com.apex.leadership` |
| Web Client ID (used in code) | `784410364707-d83v3pk056j0l5c01ls1ecc2mar4a9rh.apps.googleusercontent.com` |
| Android Client ID (auto-created) | `784410364707-uadip2teicj8otoq28oa2s9dppkk4p6c.apps.googleusercontent.com` |
| API Key | `AIzaSyDNG_1-xc_TzXSNOLq6PDGD1OwwX9DCP2A` |

---

## SHA Fingerprints to Add in Firebase Console

> Firebase Console → Project Settings → General → Your Apps → Android app (`com.apex.leadership`) → **SHA certificate fingerprints**

| Keystore | Type | SHA-1 | SHA-256 |
|----------|------|-------|---------|
| Debug (`android/app/debug.keystore`) | Debug | `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25` | `FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C` |
| Release (`apex-upload.keystore`) | Release | `14:07:70:1D:94:94:05:CB:A4:48:9A:EB:5C:10:64:CD:CE:6C:EF:FA` | `EB:5D:C9:28:E4:F3:24:03:DC:D3:E8:7A:D5:D7:8D:AD:2C:5D:F9:AE:F4:3E:77:79:86:29:F1:09:46:44:2F:8B` |

**Add ALL FOUR fingerprints (both SHA-1 and SHA-256 for both keystores).**

---

## Firebase Console Checklist

### 1. Authentication → Sign-in method
| Provider | Status Required |
|----------|----------------|
| Google | **Enabled** |
| Support email | Must be set (your email) |

### 2. Project Settings → General → Your Apps
| Check | Value |
|-------|-------|
| Android app registered | `com.apex.leadership` |
| Debug SHA-1 added | `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25` |
| Debug SHA-256 added | `FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C` |
| Release SHA-1 added | `14:07:70:1D:94:94:05:CB:A4:48:9A:EB:5C:10:64:CD:CE:6C:EF:FA` |
| Release SHA-256 added | `EB:5D:C9:28:E4:F3:24:03:DC:D3:E8:7A:D5:D7:8D:AD:2C:5D:F9:AE:F4:3E:77:79:86:29:F1:09:46:44:2F:8B` |
| `google-services.json` re-downloaded after adding fingerprints | ✅ Required |

### 3. Google Cloud Console (auto-configured by Firebase, but verify)
> https://console.cloud.google.com/apis/credentials?project=apex-leadership-2b72a

| Check | Details |
|-------|---------|
| OAuth 2.0 Client (Web) exists | Client ID: `784410364707-d83v3pk056j0l5c01ls1ecc2mar4a9rh.apps.googleusercontent.com` |
| OAuth 2.0 Client (Android) exists | Client ID: `784410364707-uadip2teicj8otoq28oa2s9dppkk4p6c.apps.googleusercontent.com` |
| Android client has correct package | `com.apex.leadership` |
| Android client has debug SHA-1 | `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25` |
| OAuth consent screen configured | External, Published (not "Testing") |

---

## Code Configuration (already set in app)

| File | Setting | Value |
|------|---------|-------|
| `src/services/authService.ts` | `WEB_CLIENT_ID` | `784410364707-d83v3pk056j0l5c01ls1ecc2mar4a9rh.apps.googleusercontent.com` |
| `google-services.json` (root) | oauth_client type 3 | Same Web Client ID as above |
| `android/app/google-services.json` | Must be identical to root copy | ✅ |
| `app.config.ts` | `googleServicesFile` | `./google-services.json` |

---

## Common DEVELOPER_ERROR Causes

| # | Cause | Fix |
|---|-------|-----|
| 1 | SHA-1 fingerprint not in Firebase | Add all fingerprints from table above |
| 2 | Wrong `webClientId` in code | Must be the **Web (type 3)** client ID, not the Android (type 1) |
| 3 | `google-services.json` is stale | Re-download from Firebase after adding fingerprints |
| 4 | OAuth consent screen in "Testing" mode | Set to "Published" in Google Cloud Console |
| 5 | Package name mismatch | Must be exactly `com.apex.leadership` everywhere |
| 6 | Google Sign-In provider not enabled | Firebase → Authentication → Sign-in method → Google → Enable |

---

## After Making Changes

1. Re-download `google-services.json` from Firebase Console
2. Place it in **both**:
   - `./google-services.json` (project root)
   - `./android/app/google-services.json`
3. Rebuild the app: `npx expo run:android` or `cd android && ./gradlew assembleDebug`
4. Uninstall old app from device before installing new build (if signing key changed)
