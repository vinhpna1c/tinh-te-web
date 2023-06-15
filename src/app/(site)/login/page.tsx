'use client'
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/src/services/firebase.service";
import { Client } from "@amityco/ts-sdk";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type } from "os";
import { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

type SignInFormData = {
    email?: string,
    password?: string,
}

export default function LoginScreen() {
    const router = useRouter();
    const { user } = useAuth();

    // useEffect(() => {
    //     axios.post('http://103.157.218.115/Tinhte/hs/Social/v1/auth',
    //         {
    //             //Login with UUID
    //             "UUID": "02062001"
    //             //Login with Username - Password
    //             // "Username": "liemld",
    //             // "Password": "21101998"

    //         }).then((value)=>{
    //             console.info("vALUE GET: "+JSON.stringify(value.data))
    //         })
    // }, [])
    // try {
    //     console.log("Login page");
    //     const client=Client.getActiveClient(); 
    //     console.log(client);   
    // } catch (error) {
    //     console.log("Error get client from amity")
    //     console.log(error)
    // }

    if (user) {
        router.push("/");
    }
    const [signInForm, setSignInForm] = useState<SignInFormData>({});
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSignInForm((prev) => {
            console.log("Update sign in information")

            return ({
                ...prev,
                [event.target.name]: event.target.value,
            })
        }
        )
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`Sign in with data: ${JSON.stringify(signInForm)}`)
        signInWithEmailAndPassword(signInForm.email ?? '', signInForm.password ?? '').then((result) => {
            if (result) {
                console.log("User get: " + JSON.stringify(result))
            }
        })
    }

    const submitForm = () => {
        console.log(`Sign in with data: ${JSON.stringify(signInForm)}`)
        signInWithEmailAndPassword(signInForm.email ?? '', signInForm.password ?? '').then((result) => {
            if (result) {
                console.log("User get: " + JSON.stringify(result))
                router.push("/");
            } else {

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
                        <form >
                            <input
                                name="email"
                                type="email"
                                className="w-full rounded border border-gray-300 mt-8 px-3 py-2"
                                placeholder="Tên tài khoản hoặc Email"
                                onChange={handleChange}
                            />
                            <input
                                name="password"
                                className="w-full rounded border border-gray-300 mt-4 px-3 py-2"
                                placeholder="Mật khẩu"
                                type="password"
                                onChange={handleChange}
                            />
                            <div className="flex flex-row w-full justify-end py-3">
                                <Link href="/login/forgot_password"><span style={{ color: "blue" }}>Quên mật khẩu?</span></Link>
                            </div>
                            <button type="submit" className="w-full rounded-xl bg-blue-700 py-2 px-3" onClick={(e) => {
                                e.preventDefault();
                                console.log("submit")
                                submitForm();
                            }}>
                                <span className="text-white font-bold text-sm">Đăng nhập</span>
                            </button>
                        </form>
                        <div className="py-3">Hoặc</div>

                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400 mb-5" style={{ color: "black", background: "#F9F9FB" }}>
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