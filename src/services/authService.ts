// ─── Auth Service ─────────────────────────────────────────────────────────────
// Handles Google Sign-In and Firebase Auth.
// Returns Firebase user on success, null on cancel/failure.

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Web client ID from google-services.json oauth_client (type 3)
const WEB_CLIENT_ID = '784410364707-d83v3pk056j0l5c01ls1ecc2mar4a9rh.apps.googleusercontent.com';

/** Call once at app startup */
export function configureGoogleSignIn() {
  GoogleSignin.configure({ webClientId: WEB_CLIENT_ID });
}

/** Sign in with Google → returns Firebase user or throws with message.
 *  Tries silent sign-in first (no UI if user was previously authenticated),
 *  then falls back to the interactive account-picker.
 */
export async function signInWithGoogle(): Promise<FirebaseAuthTypes.User | null> {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

  // ── 1. Try silent sign-in (no UI, re-uses cached account) ──────────────
  let idToken: string | null = null;
  try {
    const silentResponse = await GoogleSignin.signInSilently();
    if (silentResponse.type === 'success') {
      idToken = silentResponse.data?.idToken ?? null;
    }
  } catch {
    // No cached session — fall through to interactive picker
  }

  // ── 2. Interactive account-picker (bottom sheet on Android) ───────────
  if (!idToken) {
    const response = await GoogleSignin.signIn();
    if (response.type === 'cancelled') return null;
    idToken = response.data?.idToken ?? null;
  }

  if (!idToken) {
    throw new Error('Google Sign-In failed: no ID token returned. Check webClientId and SHA fingerprints in Firebase Console.');
  }

  const credential = auth.GoogleAuthProvider.credential(idToken);
  const userCredential = await auth().signInWithCredential(credential);
  return userCredential.user;
}

/** Sign out from both Firebase and Google */
export async function signOut(): Promise<void> {
  try {
    await GoogleSignin.revokeAccess();
  } catch {
    // Ignore — may not have Google session
  }
  try {
    await GoogleSignin.signOut();
  } catch {
    // Ignore
  }
  await auth().signOut();
}

/** Get current Firebase user (null if not signed in) */
export function getCurrentUser(): FirebaseAuthTypes.User | null {
  return auth().currentUser;
}

/** Subscribe to auth state changes */
export function onAuthStateChanged(
  callback: (user: FirebaseAuthTypes.User | null) => void,
) {
  return auth().onAuthStateChanged(callback);
}
