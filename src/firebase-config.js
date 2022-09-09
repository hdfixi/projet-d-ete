// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBivQk7CXEOCNJlVqT9XKAXUrxYBjowcz4",
  authDomain: "stage-3ea80.firebaseapp.com",
  projectId: "stage-3ea80",
  storageBucket: "stage-3ea80.appspot.com",
  messagingSenderId: "101765895568",
  appId: "1:101765895568:web:9c1fc45d6a240cfe254f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth() ;
export const storage = getStorage(app);