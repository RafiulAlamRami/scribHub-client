import React, { createContext, useEffect, useState } from 'react';

import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile=(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const provider = new GoogleAuthProvider();
    const googleLog=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const fbProvider = new FacebookAuthProvider();
    const facebookLog=()=>{
        setLoading(true)
        return signInWithPopup(auth, fbProvider)
    }

    useEffect(()=>{
        const subscribe=onAuthStateChanged(auth,(currentUser)=>{
            // const userEmail=currentUser?.email || user?.email
            const userEmail=currentUser?.email
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser?.email);

            // jwt
            const user={email:userEmail}
                if(currentUser){
                    axios.post('https://scrib-hub-server.vercel.app/jwt',user,{withCredentials:true})
                    .then(res=>{
                    console.log('token login response : ',res.data);
                })}
                else{
                    axios.post('https://scrib-hub-server.vercel.app/logOut',user,{withCredentials:true})
                    .then(res=>{
                    console.log('token logout response : ',res.data);
                })}
            // 
        })

        return ()=>{
            subscribe()
        }
    },[])

    const authInfo={user,createUser,signIn,logOut,loading,updateUserProfile,googleLog,facebookLog}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;