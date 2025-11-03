// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHSE-aaLxTv0cfuii4rEEyvF2bFGC7E84",
  authDomain: "smart-deals-5ca9e.firebaseapp.com",
  projectId: "smart-deals-5ca9e",
  storageBucket: "smart-deals-5ca9e.firebasestorage.app",
  messagingSenderId: "929509821937",
  appId: "1:929509821937:web:9459a986a5082c23ddc850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);