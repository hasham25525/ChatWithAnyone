import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjKladiJ85UsIoWSNIkVSDSgSBYkV182w",
  authDomain: "saas-anychat.firebaseapp.com",
  projectId: "saas-anychat",
  storageBucket: "saas-anychat.appspot.com",
  messagingSenderId: "200080984889",
  appId: "1:200080984889:web:3d5da484b3c54db9db36e8",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
