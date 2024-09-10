// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9JR7Lhvv9gcFCTutvEKqFirjOwU4GEK0",
  authDomain: "loginauth-4d9f6.firebaseapp.com",
  projectId: "loginauth-4d9f6",
  storageBucket: "loginauth-4d9f6.appspot.com",
  messagingSenderId: "674980836588",
  appId: "1:674980836588:web:f129056a6060a05848e1c9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;