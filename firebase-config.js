// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAabuTVlayO31oHy_k7iuqO0uWbf1DavKg",
  authDomain: "portfolio-70d3f.firebaseapp.com",
  projectId: "portfolio-70d3f",
  storageBucket: "portfolio-70d3f.appspot.com",
  messagingSenderId: "1063916568863",
  appId: "1:1063916568863:web:ca88278d5e10046efa302a",
  measurementId: "G-2GBB4CTENC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);