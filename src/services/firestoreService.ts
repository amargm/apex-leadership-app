// ─── Firestore Service ────────────────────────────────────────────────────────
// Syncs user data (progress, notes, tier) with Cloud Firestore.
// Collection: users/{uid} → single document with all user state.
//
// NOTE: userTier is an admin-controlled field. The app subscribes to it in
// real-time but never writes it — only admins set it via the Firebase console
// or a trusted backend. See subscribeToUserTier / initUserTierIfMissing.

import firestore from '@react-native-firebase/firestore';

const USERS_COLLECTION = 'users';

export interface FirestoreUserData {
  lessons: Record<string, any>;
  stats: Record<string, any>;
  savedLessonIds: string[];
  notes: any[];
  userName: string;
  largeFontOn: boolean;
  userTier: string;
  updatedAt: number; // timestamp ms
}

// Data written on every sync — does NOT include userTier (admin-controlled).
export type FirestoreSyncData = Omit<FirestoreUserData, 'userTier' | 'updatedAt'>;

/** Save user progress/notes/settings to Firestore. Never writes userTier. */
export async function saveUserData(uid: string, data: FirestoreSyncData): Promise<void> {
  await firestore()
    .collection(USERS_COLLECTION)
    .doc(uid)
    .set({ ...data, updatedAt: Date.now() }, { merge: true });
}

/** Load user state from Firestore (returns null if no doc) */
export async function loadUserData(uid: string): Promise<FirestoreUserData | null> {
  const doc = await firestore().collection(USERS_COLLECTION).doc(uid).get();
  if (!doc.exists) return null;
  return doc.data() as FirestoreUserData;
}

/**
 * Write userTier: 'free' only if the document has no userTier yet (new user).
 * This gives the admin a starting value to promote from.
 */
export async function initUserTierIfMissing(uid: string): Promise<void> {
  const doc = await firestore().collection(USERS_COLLECTION).doc(uid).get();
  if (!doc.exists || !doc.data()?.userTier) {
    await firestore()
      .collection(USERS_COLLECTION)
      .doc(uid)
      .set({ userTier: 'free' }, { merge: true });
  }
}

/**
 * Subscribe to real-time userTier changes for a user.
 * Fires immediately with the current value, then on every admin update.
 * Returns an unsubscribe function — call it on sign-out.
 */
export function subscribeToUserTier(
  uid: string,
  onTierChange: (tier: string) => void,
): () => void {
  return firestore()
    .collection(USERS_COLLECTION)
    .doc(uid)
    .onSnapshot(
      (doc) => {
        const tier = doc.data()?.userTier;
        if (tier) onTierChange(tier as string);
      },
      () => {}, // silently ignore listener errors
    );
}

/** Delete user data from Firestore */
export async function deleteUserData(uid: string): Promise<void> {
  await firestore().collection(USERS_COLLECTION).doc(uid).delete();
}
