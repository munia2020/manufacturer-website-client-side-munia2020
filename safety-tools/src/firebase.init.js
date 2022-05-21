// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp8UDccYCDf0F3Nj-fI7_d2KmG8xmxUdI",
  authDomain: "safety-tools-1f835.firebaseapp.com",
  projectId: "safety-tools-1f835",
  storageBucket: "safety-tools-1f835.appspot.com",
  messagingSenderId: "44983084995",
  appId: "1:44983084995:web:5b33dc78ca967312d37f76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;