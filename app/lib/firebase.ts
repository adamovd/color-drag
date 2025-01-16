// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5nnsI-KzJO3rJjGioFi676_GuJkn_LPQ",
  authDomain: "fir-test-9aabf.firebaseapp.com",
  databaseURL:
    "https://fir-test-9aabf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-test-9aabf",
  storageBucket: "fir-test-9aabf.firebasestorage.app",
  messagingSenderId: "472694540618",
  appId: "1:472694540618:web:9cd98707af0adca9e059b3",
  measurementId: "G-CECMWMT7TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
