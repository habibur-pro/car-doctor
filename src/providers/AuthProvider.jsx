import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../utils/firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        return signOut(auth)
    }


    const userInfo = {
        user,
        signUpWithEmailAndPassword,
        signInWithGoogle,
        signInEmailAndPassword,
        logout,
        loading
    }


    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)

            // console.log(currentUser)
        })
        return () => unSubscribe()
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;