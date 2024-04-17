// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-garbage.firebaseapp.com",
  projectId: "mern-garbage",
  storageBucket: "mern-garbage.appspot.com",
  messagingSenderId: "995497789954",
  appId: "1:995497789954:web:f9310ed3acab91c105f51b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);