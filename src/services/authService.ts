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

/** Sign in with Google → returns Firebase user or throws with message */
export async function signInWithGoogle(): Promise<FirebaseAuthTypes.User | null> {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const response = await GoogleSignin.signIn();

  if (response.type === 'cancelled') return null;

  const idToken = response.data?.idToken;
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
