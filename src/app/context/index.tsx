'use client'
import React, { ReactNode, createContext, } from "react";

const sessionStore = {} as SessionStore;
export const AppSessionContext = createContext<SessionStore>(sessionStore);
export const AppContextProvider = (props: { children: ReactNode }) => {
    return (
        <AppSessionContext.Provider value={sessionStore}>
            {props.children}
        </AppSessionContext.Provider>)
}