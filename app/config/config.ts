// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_lENbJ2NLwdtp8kGg-WbnVJ78PuGMAQ",
  authDomain: "jahlextravelweb.firebaseapp.com",
  projectId: "jahlextravelweb",
  storageBucket: "jahlextravelweb.firebasestorage.app",
  messagingSenderId: "617119002948",
  appId: "1:617119002948:web:cf9af3eb8187ba9c016711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db= getFirestore(app);