// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGyMC3noJp3x8ij-Jimj7Azk4nigJ0NWg",
  authDomain: "mitchspizzeria.firebaseapp.com",
  projectId: "mitchspizzeria",
  storageBucket: "mitchspizzeria.appspot.com",
  messagingSenderId: "475754854423",
  appId: "1:475754854423:web:8b38e0db970ba2d31e8452"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);