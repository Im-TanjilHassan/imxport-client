import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //track user state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

      return () => unsubscribe();
    }, []);

    //google login
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };

    //signup
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    //login
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    //updateProfile
    const updateUserProfile = (name, url) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: url,
      });
    };

    //reset password
    const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
    };

    //logout
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };

    //information
    const info = {
      user,
      googleLogin,
      createUser,
      loginUser,
      updateUserProfile,
      resetPassword,
      logout,
      loading,
    };
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
};

export default AuthProvider;