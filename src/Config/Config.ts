// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxc3lhwtPCVhykS14feL2iQdFo8oUS10U",
  authDomain: "one-store-6a1a6.firebaseapp.com",
  projectId: "one-store-6a1a6",
  storageBucket: "one-store-6a1a6.appspot.com",
  messagingSenderId: "289722570137",
  appId: "1:289722570137:web:32d5ed081ecc1f5b9aef08",
  measurementId: "G-FKMVX0HR02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app)

