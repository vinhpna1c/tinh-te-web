'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/src/services/firebase.service';
import { Elsie_Swash_Caps } from 'next/font/google';
const AuthContext = createContext({
    user:null,
    firebaseUser: null
});

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = (
    { children }: {
        children: React.
        ReactNode
    }
) => {
    const [user, setUser] = useState<any>(null);
    const [firebaseUser, setFirebaseUser] = useState<User|null>(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Firebase user: "+ JSON.stringify(user))
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
                setFirebaseUser(user)
            }
            else {
                setUser(null);
                setFirebaseUser(null);
            }
        });

        return ()=> unsubscribe();
    }, [])
    return <AuthContext.Provider value={{user,firebaseUser}}>
        {children}
    </AuthContext.Provider>
}