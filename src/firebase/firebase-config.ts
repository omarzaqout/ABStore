// src/firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore (قاعدة بيانات)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFDFnjFVac34nqW58OVvGWKP5O6muS4GA",
  authDomain: "abstore-train.firebaseapp.com",
  projectId: "abstore-train",
  storageBucket: "abstore-train.firebasestorage.app",
  messagingSenderId: "151910473245",
  appId: "1:151910473245:web:9f3b73463a31a2ddd6b0f4",
  measurementId: "G-K5XPL2SZZF" // مش ضروري لو مش مستخدم Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
