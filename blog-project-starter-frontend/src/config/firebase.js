
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_EXISTING_API_KEY",
  authDomain: "blog-app-student.firebaseapp.com",
  projectId: "blog-app-student",
  storageBucket: "blog-app-student.firebasestorage.app",
  messagingSenderId: "658293312522",
  appId: "1:658293312522:web:d2d7fd86ee9c2bf17d63f3",
  measurementId: "G-Q1P382SKVH",
};

// Initialize Firebase only once
const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export default auth;
