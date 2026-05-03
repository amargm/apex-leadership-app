// ─── Firebase Configuration ───────────────────────────────────────────────────
// Initializes Firebase app, auth, and firestore.
// google-services.json handles Android config automatically.

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

export { firebase, auth, firestore, crashlytics };
