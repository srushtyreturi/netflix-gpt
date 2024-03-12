// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGjOMc7qmjILyiYobzFApe2g59Q2AxQo",
  authDomain: "netflixgpt-bb99f.firebaseapp.com",
  projectId: "netflixgpt-bb99f",
  storageBucket: "netflixgpt-bb99f.appspot.com",
  messagingSenderId: "316067307785",
  appId: "1:316067307785:web:b9be771897109e1f5273d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
