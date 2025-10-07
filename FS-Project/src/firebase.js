// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBv1MwkCGwu4SHV4Pf1zKsV2bdXtAoj-Xc",
  authDomain: "capturepro-5ee3f.firebaseapp.com",
  projectId: "capturepro-5ee3f",
  storageBucket: "capturepro-5ee3f.appspot.com",
  messagingSenderId: "412549522497",
  appId: "1:412549522497:web:500d0b571c43ddb09392c0",
  measurementId: "G-R3KVDPZ6WQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
