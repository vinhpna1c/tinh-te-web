'use client'
import { useState } from "react";
import HomeWall from "../../components/HomeWall";
import UserLayout from "../../container";
import UserNavbar from '../../sections/NavBar';
import { AiFillEdit } from "react-icons/ai";
import PersonalInformation from "../../components/PersonalInformation";

const tabHeaders = ['Tường nhà', 'Album và ảnh', 'Thông tin cá nhân'];
const tabs = [<HomeWall />, <div>Album</div>, <PersonalInformation />];

export default function UserProfile() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <UserLayout>
            <div className='flex justify-center'>
                <div className='h-10 w-3/4 flex flex-wrap justify-between font-medium mt-4 mb-4 border-b border-b-gray-400'>
                    <div className='flex flex-row gap-10'>
                        {tabHeaders.map((tab, index) => (
                            <div key={tab} className={selectedIndex == index ? 'border-b-4 border-b-blue-700' : 'hover:border-b-4 border-b-blue-300'} onClick={() => setSelectedIndex(index)}>
                                <span >{tab}</span>
                            </div>
                        ))}

                    </div>
                    <div>
                        <div className='w-48 bg-blue-100 text-blue-600 rounded-2xl drop-shadow-xl hover:bg-blue-200 px-2 py-1'>
                            <span className='flex'>
                                Đăng Bài Viết Ngay<br />
                                <AiFillEdit size={22} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {tabs[selectedIndex]}
        </UserLayout>
    )
}