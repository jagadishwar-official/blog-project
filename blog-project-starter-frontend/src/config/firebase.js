import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import auth from "../config/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG15We8Pvlv-aEonuQNYF6M4cpEg_xSJ0",
  authDomain: "blog-app-student.firebaseapp.com",
  projectId: "blog-app-student",
  storageBucket: "blog-app-student.firebasestorage.app",
  messagingSenderId: "658293312522",
  appId: "1:658293312522:web:d2d7fd86ee9c2bf17d63f3",
  measurementId: "G-Q1P382SKVH",
};

// Initialize Firebase only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export default auth