// firebase/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-firestore.js";

// Firebase config copy from your Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyATmhXzFIhqg899t5QDKJSKNywzh0Lfm1c",
  authDomain: "dashboard---beta.firebaseapp.com",
  projectId: "dashboard---beta",
  storageBucket: "dashboard---beta.firebasestorage.app",
  messagingSenderId: "372309336318",
  appId: "1:372309336318:web:a1c4435a72e8f699d105af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
