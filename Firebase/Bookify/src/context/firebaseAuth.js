import { firebaseApp } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

// Function to sign in with Google
const signInWithGooglePopup = () => {
  return signInWithPopup(firebaseAuth, googleAuthProvider);
};
// sign out function
const signOutUser = () => {
  console.log("Signing out user...");

  return signOut(firebaseAuth);
};

// Function to create user with email and password
const signInUserEmail = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

// Function to log in with email and password
const loginUserEmail = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

// reset password function
const resetUserPassword = async (email = "") => {
  console.log(email);
  if (!email) {
    throw new Error("Email is required to reset password");
  }
  return await sendPasswordResetEmail(firebaseAuth, email);
};

// exporting
export {
  firebaseAuth,
  signInUserEmail,
  loginUserEmail,
  signInWithGooglePopup,
  signOutUser,
  resetUserPassword,
};
