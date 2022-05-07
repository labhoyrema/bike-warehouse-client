// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCjPQaUy_K6nny1pBtSkqyhPE9Pz2ZVlJk",
  // authDomain: "assignment-11-43f44.firebaseapp.com",
  // projectId: "assignment-11-43f44",
  // storageBucket: "assignment-11-43f44.appspot.com",
  // messagingSenderId: "941623286402",
  // appId: "1:941623286402:web:6db5ad54d71acb63edf29b",

  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_DOMIN,
  projectId: process.env.REACT_APP_IdS,
  storageBucket: process.env.REACT_APP_BK,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
