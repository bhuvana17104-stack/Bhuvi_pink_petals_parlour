// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  connectFirestoreEmulator,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdBDVcV1fkitYtwmOe02ukR2PDUmrSmfU",
  authDomain: "pink-petals-parlour.firebaseapp.com",
  projectId: "pink-petals-parlour",
  storageBucket: "pink-petals-parlour.firebasestorage.app",
  messagingSenderId: "663441827892",
  appId: "1:663441827892:web:836c087833538f0a97c261",
  measurementId: "G-TJSE6HWMZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
console.log("Firebase connected!");
