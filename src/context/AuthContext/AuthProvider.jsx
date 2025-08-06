import React, { useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider
} from "firebase/auth";
import AuthContext from "./AuthContext";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User With Email & Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email & password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update a user's profile
  const updateUserProfile = (user) =>{
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: user.username,
    })
  }

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign Out User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // The Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("Auth Change Captured, ", currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const info = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    updateUserProfile,
    signInWithGoogle,
    signOutUser,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
