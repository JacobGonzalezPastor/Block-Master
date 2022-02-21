import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD73IkZHhpeN2fK97x0EeOStM8lXW-96Is",
  authDomain: "estudiantes-63d16.firebaseapp.com",
  projectId: "estudiantes-63d16",
  storageBucket: "estudiantes-63d16.appspot.com",
  messagingSenderId: "609488677536",
  appId: "1:609488677536:web:9eaac671981fda9c8f37c5"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();
export { app, google, db };