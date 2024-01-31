// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm_aHeUNei4P_xGnh6iKd1BB7oR2Q3RHU",
  authDomain: "renjiiocomments.firebaseapp.com",
  projectId: "renjiiocomments",
  storageBucket: "renjiiocomments.appspot.com",
  messagingSenderId: "690864695976",
  appId: "1:690864695976:web:4d6bbfb28f3d43c7f2f09d",
  measurementId: "G-NY5ERKFB01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
