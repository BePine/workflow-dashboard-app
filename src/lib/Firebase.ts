// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCRp-FvldqmyvSyWYZE4iJkG1IVsyW_XPw",
  authDomain: "workflow-app-907ce.firebaseapp.com",
  projectId: "workflow-app-907ce",
  storageBucket: "workflow-app-907ce.appspot.com",
  messagingSenderId: "322426209155",
  appId: "1:322426209155:web:fb2aab974183eff132acb6",
  measurementId: "G-Q9X0PEBHWK"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
export {auth}
  