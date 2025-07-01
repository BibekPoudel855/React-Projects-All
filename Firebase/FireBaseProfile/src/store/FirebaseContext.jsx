import { createContext, use, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// initialize Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyAMEb-ZKqDOviKv2g21nfTq-TaIwGZ04c8",
  authDomain: "profile-a59c8.firebaseapp.com",
  projectId: "profile-a59c8",
  storageBucket: "profile-a59c8.firebasestorage.app",
  messagingSenderId: "163574992717",
  appId: "1:163574992717:web:e8cf95f667936f26eef104",
};
// exporting firebase app and auth
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseRealtimeDatabase = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firebaseFirestore = getFirestore(firebaseApp);


//custom hooks
export const useFirebase = () => {
  return useContext(firebaseContext);
};

// creating firebase context
const firebaseContext = createContext(null);

/// provider component
function FirebaseContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log("User is signed in:", user);
      } else {
        setUser(null);
        console.log("No user is signed in.");
      }
    });
  }, []);

  const signInGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };
  const signUpUserEmail = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const addUserData = (key, data) => {
    set(ref(firebaseRealtimeDatabase, key), data);
  };
  const loginUserEmail = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signOutUser = ()=>{
    return signOut(firebaseAuth);
  }
  return (
    <firebaseContext.Provider
      value={{
        user,
        signUpUserEmail,
        addUserData,
        loginUserEmail,
        signInGoogle,
        signOutUser,
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
}

export default FirebaseContextProvider;
