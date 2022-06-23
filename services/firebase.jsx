// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdoYpNdUY4DhSoEqEcXGbbw9CrKeSLl7M",
    authDomain: "crud-simples-e37b2.firebaseapp.com",
    projectId: "crud-simples-e37b2",
    storageBucket: "crud-simples-e37b2.appspot.com",
    messagingSenderId: "868631496389",
    appId: "1:868631496389:web:304431ee2ab9adc4d6d2ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)