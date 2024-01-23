// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDlhWwO9EcpRpo0RDtKWWrkr3-U9j82SDM",
  authDomain: "bank-project-1df32.firebaseapp.com",
  projectId: "bank-project-1df32",
  storageBucket: "bank-project-1df32.appspot.com",
  messagingSenderId: "446619487305",
  appId: "1:446619487305:web:54ab46f8c8b14d00f9c398"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;