// ─── Firestore Service ────────────────────────────────────────────────────────
// Syncs user data (progress, notes, tier) with Cloud Firestore.
// Collection: users/{uid} → single document with all user state.

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

/** Save user state to Firestore */
export async function saveUserData(uid: string, data: Omit<FirestoreUserData, 'updatedAt'>): Promise<void> {
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

/** Delete user data from Firestore */
export async function deleteUserData(uid: string): Promise<void> {
  await firestore().collection(USERS_COLLECTION).doc(uid).delete();
}
