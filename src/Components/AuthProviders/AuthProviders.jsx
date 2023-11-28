import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FireBase/Firebase";
import UseAxiosPublic from './../Hooks/UseAxiosPublic/UseAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const [loading,setLoading] =  useState(true);
    const AxiosPublic = UseAxiosPublic();
    const createUser = (email,password) =>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const SignInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user changed",currentUser);
            setUser(currentUser);
            
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[]);


    const AuthInfo ={
        user,
        createUser,
        LogOut,
        SignIn,
        loading,
        SignInWithGoogle,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;