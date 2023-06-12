'use client'

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/src/services/firebase.service";
import { Client } from "@amityco/ts-sdk";
import Link from "next/link";
import { type } from "os";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

type SignInFormData = {
    email?: string,
    password?: string,
}

export default function LoginScreen() {

    // try {
    //     console.log("Login page");
    //     const client=Client.getActiveClient(); 
    //     console.log(client);   
    // } catch (error) {
    //     console.log("Error get client from amity")
    //     console.log(error)
    // }
    const [signInForm, setSignInForm] = useState<SignInFormData>({});
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignInForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`Sign in with data: ${JSON.stringify(signInForm)}`)
        signInWithEmailAndPassword(signInForm.email ?? '', signInForm.password ?? '').then((result)=>{
            if(result){
                console.log
            }else{
                
            }
        })
    }


    // console.log("Current user: " + JSON.stringify(user));
    return (
        <div className="w-full h-screen bg-gray-400">

            <div className="flex h-full flex-row justify-center items-center">
                <div className="rounded-2xl bg-white" style={{ maxWidth: 500, flexGrow: 0, flexShrink: 0, flexBasis: '50%' }}>
                    <div className="flex flex-row justify-between border-b-[1px] border-b-gray-300 px-6 py-4">
                        <span className="font-semibold text-base">Đăng nhập tài khoản</span>
                        <button className="rounded-full border w-8 h-8 border-gray-500">X</button>
                    </div>
                    <div className="flex flex-col items-center px-6 py-4">
                        <img src='./images/logo_colored.png' />
                        <form onSubmit={handleSubmit}>
                            <input
                                className="w-full rounded border border-gray-300 mt-8 px-3 py-2"
                                placeholder="Tên tài khoản hoặc Email"
                                onChange={handleChange}
                            />
                            <input
                                className="w-full rounded border border-gray-300 mt-4 px-3 py-2"
                                placeholder="Mật khẩu"
                                onChange={handleChange}
                            />
                            <div className="flex flex-row w-full justify-end py-3">
                                <Link href="/login/forgot_password"><span style={{ color: "blue" }}>Quên mật khẩu?</span></Link>
                            </div>
                            <button type="submit" className="w-full rounded-xl bg-blue-700 py-2 px-3">
                                <span className="text-white font-bold text-sm">Đăng nhập</span>
                            </button>
                        </form>
                        <div className="py-3">Hoặc</div>

                        <button type="submit" className="w-full rounded-xl bg-gray-100 border border-gray-400 mb-5" style={{ color: "black", background: "#F9F9FB" }}>
                            <span className="flex justify-center py-2">
                                <img src="https://tinhte.vn/styles/tinhte2018/google.png" />
                                <span className="ml-2">  Đăng nhập bằng Google </span>
                            </span>
                        </button>

                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400 mb-5" style={{ color: "black", background: "#F9F9FB" }}>
                            <span className="flex justify-center py-2">
                                <img src="https://tinhte.vn/styles/tinhte2018/facebook.png" />
                                <span className="ml-2">  Đăng nhập bằng Facebook </span>
                            </span>
                        </button>

                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400 mb-5" style={{ color: "black", background: "#F9F9FB" }}>
                            <span className="flex justify-center py-2">
                                <img src="https://tinhte.vn/styles/tinhte2018/apple.png" />
                                <span className="ml-2">  Đăng nhập bằng Apple </span>
                            </span>
                        </button>

                        <span>Chưa có tài khoản? <Link href={"/sign_up"}><span style={{ color: "blue" }}>Đăng kí</span></Link>
                        </span>

                    </div>
                </div>

            </div>

        </div>
    );
}