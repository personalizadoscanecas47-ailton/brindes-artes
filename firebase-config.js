import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbAeVNgz1LGrkAgHEwNttr9h3JlSeYG2o",
  authDomain: "brindes-arte.firebaseapp.com",
  projectId: "brindes-arte",
  storageBucket: "brindes-arte.firebasestorage.app",
  messagingSenderId: "699924584237",
  appId: "1:699924584237:web:ffa81a6ce2717a6558a5a4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);