// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwH8vPEW2KJKWWxNK-WUsJHqk2IzElYHI",
  authDomain: "portfolio-cdec2.firebaseapp.com",
  projectId: "portfolio-cdec2",
  storageBucket: "portfolio-cdec2.appspot.com",
  messagingSenderId: "79483462318",
  appId: "1:79483462318:web:1544800baa41fd0dcc433f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)