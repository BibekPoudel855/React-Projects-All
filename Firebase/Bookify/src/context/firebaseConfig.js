import { initializeApp } from "firebase/app";
// FirebaseConfig object containing the configuration details for Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDa7lPj6JYl_DHRy4MLBtvRxbDl-8OdS8I",
  authDomain: "bookify-9b320.firebaseapp.com",
  projectId: "bookify-9b320",
  storageBucket: "bookify-9b320.firebasestorage.app",
  messagingSenderId: "1015282329797",
  appId: "1:1015282329797:web:e2d64a1f0c7a69ed6e68ac",
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
