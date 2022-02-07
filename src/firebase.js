// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSiB54nwTp3UAvK-nUpYNEIX-Gl7Oat5s",
  authDomain: "myportfolioproject-efc13.firebaseapp.com",
  projectId: "myportfolioproject-efc13",
  storageBucket: "myportfolioproject-efc13.appspot.com",
  messagingSenderId: "517876167662",
  appId: "1:517876167662:web:305c38920cef1848d214ff",
  measurementId: "G-3VV40R5VN2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage };