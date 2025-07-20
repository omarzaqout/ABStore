// src/firebase/testFirestore.ts
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

export const testConnection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'test'));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    console.log("✅ Firestore is connected successfully!");
  } catch (error) {
    console.error("❌ Error connecting to Firestore:", error);
  }
};
