// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1U6mowuNo6hYEQmuXuwd9OwXrdf671Os",
  authDomain: "turk-17d8e.firebaseapp.com",
  databaseURL: "https://turk-17d8e-default-rtdb.firebaseio.com",
  projectId: "turk-17d8e",
  storageBucket: "turk-17d8e.appspot.com",
  messagingSenderId: "38935107017",
  appId: "1:38935107017:web:01c0c26a90d59449574418",
  measurementId: "G-HGN3K8B0H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
