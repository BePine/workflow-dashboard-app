import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCRp-FvldqmyvSyWYZE4iJkG1IVsyW_XPw",
  authDomain: "workflow-app-907ce.firebaseapp.com",
  projectId: "workflow-app-907ce",
  storageBucket: "workflow-app-907ce.appspot.com",
  messagingSenderId: "322426209155",
  appId: "1:322426209155:web:fb2aab974183eff132acb6",
  measurementId: "G-Q9X0PEBHWK"
};

initializeApp(firebaseConfig)

export const db = getFirestore()

export const usersDataColRef = collection(db, "Users-data")