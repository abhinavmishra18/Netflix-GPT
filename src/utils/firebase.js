// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt8ysdfyfpy82GmGq81wXtwfHErZYvuXs",
  authDomain: "netflixgpt-df823.firebaseapp.com",
  projectId: "netflixgpt-df823",
  storageBucket: "netflixgpt-df823.appspot.com",
  messagingSenderId: "394708176364",
  appId: "1:394708176364:web:8e92d0cabb31dc77ae04c9",
  measurementId: "G-FX6E8RDYCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();