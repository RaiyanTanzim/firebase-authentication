// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVmKHxhnZ88Hh8UZ7nR9od19p8UQ4WwAU",
  authDomain: "learning-firebase-e1eb6.firebaseapp.com",
  projectId: "learning-firebase-e1eb6",
  storageBucket: "learning-firebase-e1eb6.firebasestorage.app",
  messagingSenderId: "18390377161",
  appId: "1:18390377161:web:aa4bdbbadb1162b2ea6318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app