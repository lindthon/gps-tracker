// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCddcELXJ1m8xUeD_YOgQLs9iQPng1Rddc",
  authDomain: "gps-tracking-d2e57.firebaseapp.com",
  projectId: "gps-tracking-d2e57",
  storageBucket: "gps-tracking-d2e57.appspot.com",
  messagingSenderId: "419782401233",
  appId: "1:419782401233:web:3af82b5c8f9924b687b9f0",
  measurementId: "G-1QM7GBZYE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);