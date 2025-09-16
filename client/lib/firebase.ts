// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUpkeO73L8JJ5ZOy7ZQu3vxrOty7w6CZ8",
  authDomain: "stich-d3357.firebaseapp.com",
  projectId: "stich-d3357",
  storageBucket: "stich-d3357.firebasestorage.app",
  messagingSenderId: "943316088581",
  appId: "1:943316088581:web:2510dd69d0f446e6e0696c",
  measurementId: "G-8KZP67LZ4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);