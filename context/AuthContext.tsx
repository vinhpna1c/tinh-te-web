'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/src/services/firebase.service';
import { Elsie_Swash_Caps } from 'next/font/google';
import AuthContextProps from './AuthContextProps';
const authContextValue:AuthContextProps={
    user:null,
    firebaseUser: null
}
const AuthContext = createContext(authContextValue);

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = (
    { children }: {
        children: React.
        ReactNode
    }
) => {

    const [authContext,setAuthContext]=useState<AuthContextProps>({firebaseUser:null,user:null});
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Firebase user: "+ JSON.stringify(user))
                setAuthContext({...authContext,firebaseUser:user})
            }
            else {
                console.info("Set null for context")
                setAuthContext({user:null,firebaseUser:null})
            }
        });

        return ()=> unsubscribe();
    }, [])
    return <AuthContext.Provider value={authContext}>
        {children}
    </AuthContext.Provider>
}