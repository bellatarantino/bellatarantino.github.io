// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEoRJn_5dH549cU033cIg7zC3QZ1F3c9s",
  authDomain: "classroom-feed-2ec8d.firebaseapp.com",
  databaseURL: "https://classroom-feed-2ec8d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "classroom-feed-2ec8d",
  storageBucket: "classroom-feed-2ec8d.firebasestorage.app",
  messagingSenderId: "1024239225027",
  appId: "1:1024239225027:web:c98c60327f30ebbf643a76",
  measurementId: "G-XTB9M55X2X"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

// Call this once in your app to ensure there's an auth user
export async function ensureAnonAuth() {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) await signInAnonymously(auth);
      unsub(); resolve();
    });
  });
}