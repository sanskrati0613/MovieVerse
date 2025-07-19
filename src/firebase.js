// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add Firestore import

const firebaseConfig = {
  apiKey: "AIzaSyA31LiatcDjvm-lWcNJYOGWymelyCVpYT0",
  authDomain: "movieverse-2d1fa.firebaseapp.com",
  projectId: "movieverse-2d1fa",
  storageBucket: "movieverse-2d1fa.firebasestorage.app",
  messagingSenderId: "847505110492",
  appId: "1:847505110492:web:20efbaa4be48ff35d80b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Firestore instance
