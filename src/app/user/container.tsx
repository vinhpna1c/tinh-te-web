import React from 'react'
import Image from 'next/image'
// import { BsFillEggFill } from 'react-icons/bs'
// import { AiFillEdit } from 'react-icons/ai'
import Link from 'next/link'
import Header from '../sections/Header'
import NavBar from '../sections/NavBar'
import UserHeader from './sections/Header'
import UserNavbar from './sections/NavBar'


export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <UserHeader />
            
            {/* <div className='flex justify-center'> */}
            <UserNavbar />
                <div className=''>
                    {children}
                </div>
            {/* </div> */}
            <NavBar />
        </div>
    )
}