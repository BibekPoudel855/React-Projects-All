import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore/lite";
import { firebaseApp } from "./FirebaseConfig";
import { use } from "react";

const fireStore = getFirestore(firebaseApp);

const addDataToFirestore = async (
  uid,
  displayName,
  email,
  profileURL,
  isbn,
  name,
  price,
  imageUrl
) => {
  const bookData = {
    uid,
    displayName,
    email,
    profileURL,
    isbn,
    name,
    price,
    imageUrl,
  };
  return await addDoc(collection(fireStore, "books"), bookData);
};

const getFirestoreBookData = () => {
  return getDocs(collection(fireStore, "books"));
};

// function to store user data in Firestore
const storeUserData = async (userDetails) => {
  console.log("Storing user data in Firestore...");
  console.log(userDetails);
  return await setDoc(doc(fireStore, "users", userDetails.userId), userDetails);
};

const getUserDataByUserId = (userID) => {
  return getDoc(doc(fireStore, "users", userID));
};

const checkExtraDataExists = async (userId) => {
  return await getDoc(doc(fireStore, "users", userId));
};

// cart feature
const addToCart = async (userId, bookId) => {

};



export {
  fireStore,
  addDataToFirestore,
  getFirestoreBookData,
  storeUserData,
  getUserDataByUserId,
  checkExtraDataExists,
  addToCart,
};
