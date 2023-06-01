"use client";
import AmityAuth from "@/src/services/amity.auth.service";
import { Client, FeedRepository } from "@amityco/ts-sdk";
import { useEffect, useState } from "react"

export default function AllQuickPost(){
    const [isSignedIn,setIsSignedIn]=useState<boolean>(false);
    useEffect(()=>{
        console.log("Query post");
        
    },[])
    return (
        <div>
            <h1>Chuyên trang xem nhanh</h1>
            <button className="border border-gray-900" onClick={()=>{
                AmityAuth.login("99").then((value)=>{
                    const isSigned=Client.isConnected();
                    console.info(isSigned)
                    setIsSignedIn(isSigned)
                    FeedRepository.queryGlobalFeed().then((value)=>{

                        console.log("Post: "+value.data);
                    })
                });
                
            }}>{isSignedIn? "Signed in":'Sign in Amity'}</button>
        </div>
    )
}