import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmaMvX1UmxCZJG62Cqy1rhe3uM8oPwGzo",
  authDomain: "travelbharat-2150d.firebaseapp.com",
  projectId: "travelbharat-2150d",
  storageBucket: "travelbharat-2150d.firebasestorage.app",
  messagingSenderId: "915678959797",
  appId: "1:915678959797:web:8e66bdcb2447a482b806fc",
  measurementId: "G-GRD0LZB894"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);