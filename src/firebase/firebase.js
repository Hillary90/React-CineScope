import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZVZNn4tmobjMweFY5ZjRcE-6Pqz5Qk4E",
  authDomain: "cinescope-815b2.firebaseapp.com",
  projectId: "cinescope-815b2",
  storageBucket: "cinescope-815b2.firebasestorage.app",
  messagingSenderId: "142621755093",
  appId: "1:142621755093:web:51a909bf4ec41187b4c45c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }