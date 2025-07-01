// importing
import { createContext, useContext, useEffect, useState } from "react";
import {
  loginUserEmail,
  resetUserPassword,
  signInUserEmail,
  signInWithGooglePopup,
  signOutUser,
} from "./firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDataToFirestore,
  addToCart,
  checkExtraDataExists,
  getFirestoreBookData,
  getUserDataByUserId,
  storeUserData,
} from "./fireStore";
import { firebaseAuth } from "./firebaseAuth";
import toast from "react-hot-toast";
import addImageToCloudnary from "./cloudnary";

// creating context
const FirebaseContext = createContext(null);

// custom hook which return the context value
function useFirebase() {
  return useContext(FirebaseContext);
}

// FirebaseProvider compone nt which provides the context value to its children
function FirebaseProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
  }, []);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((err) => {
        toast.error("Logout failed. Please try again.");
      });
  };
  return (
    <FirebaseContext.Provider
      value={{
        signInUserEmail,
        loginUserEmail,
        signInWithGooglePopup,
        user,
        isLoggedIn,
        addDataToFirestore,
        getFirestoreBookData,
        signOutUser,
        handleLogOut,
        storeUserData,
        getUserDataByUserId,
        checkExtraDataExists,
        addImageToCloudnary,
        addToCart,
        resetUserPassword
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

// exporting different components and hooks
export { FirebaseProvider, useFirebase };
export default FirebaseContext;
