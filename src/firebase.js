// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHI5tjZBE_qQiJbPuuj_dYoX3ArBF9TzM",
  authDomain: "react-disney-plus-app-396fa.firebaseapp.com",
  projectId: "react-disney-plus-app-396fa",
  storageBucket: "react-disney-plus-app-396fa.appspot.com",
  messagingSenderId: "437502113776",
  appId: "1:437502113776:web:a589974a8486b156658f35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
