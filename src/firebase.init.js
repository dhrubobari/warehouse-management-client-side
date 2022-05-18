// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRZxKA-x4BALwqxR-tnN6lyNOdJM28yUk",
  authDomain: "tech-scope-inventory.firebaseapp.com",
  projectId: "tech-scope-inventory",
  storageBucket: "tech-scope-inventory.appspot.com",
  messagingSenderId: "279282068763",
  appId: "1:279282068763:web:5718639e221ad4f1feb7be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;