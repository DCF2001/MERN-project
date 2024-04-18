// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-b3131.firebaseapp.com",
  projectId: "mern-project-b3131",
  storageBucket: "mern-project-b3131.appspot.com",
  messagingSenderId: "451053001844",
  appId: "1:451053001844:web:ee7fe97d2a4e8044f18521"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);