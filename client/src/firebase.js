// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-7fe8c.firebaseapp.com",
  projectId: "realestate-7fe8c",
  storageBucket: "realestate-7fe8c.appspot.com",
  messagingSenderId: "1099460384207",
  appId: "1:1099460384207:web:cad5d05573c08dcb49aeba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
