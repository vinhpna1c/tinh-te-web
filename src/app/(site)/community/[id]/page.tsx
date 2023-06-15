'use client'
import CommunityItem from "@/src/app/components/CommunityItem";

import Header from "@/src/app/sections/Header";
import Link from "next/link";
import { FiEdit } from 'react-icons/fi';
import { BiCalendarEdit, BiLink } from 'react-icons/bi';
import { BsPersonFillCheck, BsImage } from 'react-icons/bs';
import PostItem from "../components/PostItem";
import { tempDataCommunityItem } from "@/src/utils/mockdata/community";


function CommunityInformationSection() {
    return (
        <div>

        </div>
    );
}

function CommunityDetail() {

    return (
        <div>
            <Header />
            <div className="grid grid-cols-4 py-2 px-4 bg-blue-100">
                <div className="col-span-1">
                    {/* Community Infomation */}
                    <div className="max-w-[300px]">
                        <div className=" bg-white rounded flex flex-col justify-start">
                            <div className="rounded mb-2">
                                <img className="w-full h-auto" src="https://imgproxy7.tinhte.vn/aoE3LjX3vu4YEV8wAv314bkFSQFGFGwTC-1pKyvbAYA/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/04/6399434_og.jpg" />
                                <div className="p-2">
                                    <h3 className="text-base">Cộng đồng</h3>
                                    <h1 className="text-2xl font-semibold">STMN 23</h1>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded flex flex-col items-start mt-3 p-2">
                            <div className="flex flex-row ">
                                <FiEdit size={24} color={"#2ebfd9"} />
                                <div className="flex flex-col ml-2">
                                    <span>Thảo luận</span>
                                    <span className="font-semibold">40 bài</span>
                                </div>
                            </div>
                            <div className="flex flex-row ">
                                <BiCalendarEdit size={24} color={"#2ebfd9"} />
                                <div className="flex flex-col ml-2">
                                    <span>Trung bình</span>
                                    <span className="font-semibold">0 bài/ngày</span>
                                </div>
                            </div>
                            <div className="flex flex-row mt-3 ">
                                <BsPersonFillCheck size={24} color={"#2ebfd9"} />
                                <div className="flex flex-col ml-2">
                                    <span>Theo dõi bởi</span>
                                    <span className="font-semibold">1 thành viên</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white grid grid-cols-2 mb-2'>
                            {tempDataCommunityItem.map((item, index) => {
                                return (
                                    <Link key={index} href="/thread/1">
                                        <CommunityItem imgURL={item.imgURL} badge={item.badge} itemnumber={item.itemnumber} />
                                    </Link>
                                )
                            })
                            }
                        </div>
                    </div>

                    <div className='col-span-2'>

                        <button
                            className='rounded-sm bg-gray-400 w-full px-4 py-2 text-sm font-normal'
                            onClick={() => {
                                // router.push('/community');
                            }}
                        >Xem tất cả (84)</button>

                    </div>
                </div>
                <div className="col-span-3 lg:col-span-2">
                    {/* Community Posts */}
                    <div className="bg-white rounded-lg grid grid-cols-4 mb-1 p-3">
                        <div className="col-span-2 rounded bg-gradient-to-r to-cyan-500 from-blue-500 mr-1 py-2">
                            <span className="text-white flex items-center justify-center">Đăng kí theo dõi</span>
                        </div>
                        <div className="col-span-1 mr-1 flex justify-center  py-2 bg-gray-200">
                            <span>Ghim</span>
                        </div>
                        <div className="col-span-1 flex justify-center  py-2 bg-gray-200">
                            <span>Chia sẻ</span>
                        </div>
                    </div>

                    <div className="bg-white rounded mb-1 p-4">
                        <span>Thảo luận</span>
                    </div>

                    <div className="rounded flex flex-row px-3 py-1 items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-400">

                        </div>
                        <div className="rounded-full bg-blue-500 flex-grow mx-2">
                            <span className="text-white flex justify-center items-center  px-2">+ Tạo bài viết</span>
                        </div>
                        <BsImage size={24} className="mr-2" />
                        <BiLink size={24} />
                    </div>
                    {/* List of posts */}
                    <PostItem />
                </div>

                <div>

                </div>


                <div className="col-auto">

                </div>


            </div>
        </div>
    )
}

export default CommunityDetail;