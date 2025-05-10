// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPZzrQtB8rzrpcMM5KdDMQ006lqwaOx0g",
  authDomain: "jahlextravel-8eeae.firebaseapp.com",
  projectId: "jahlextravel-8eeae",
  storageBucket: "jahlextravel-8eeae.firebasestorage.app",
  messagingSenderId: "397366431481",
  appId: "1:397366431481:web:d6a9f3bfe1f17584c8dc28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);