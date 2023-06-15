'use client'
import CommunityItem from "@/src/app/components/CommunityItem";
import { tempDataCommunityItem } from "@/src/app/page";
import Header from "@/src/app/sections/Header";
import Link from "next/link";
import { FiEdit } from 'react-icons/fi';
import { BiCalendarEdit, BiLink } from 'react-icons/bi';
import { BsPersonFillCheck, BsImage } from 'react-icons/bs';
import PostItem from "../components/PostItem";


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
                    <div className=" bg-white flex flex-col justify-start">
                        <div className="rounded mb-2">
                            <img className="w-full h-auto" src="https://imgproxy7.tinhte.vn/aoE3LjX3vu4YEV8wAv314bkFSQFGFGwTC-1pKyvbAYA/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/04/6399434_og.jpg" />
                            <div>
                                <h3>Cộng đồng</h3>
                                <h1>STMN 23</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded flex flex-col items-start mb-2">
                        <div className="flex flex-row ">
                            <FiEdit size={16} />
                            <div className="flex flex-col">
                                <span>Thảo luận</span>
                                <span>40 bài</span>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <BiCalendarEdit size={16} />
                            <div className="flex flex-col">
                                <span>Trung bình</span>
                                <span>0 bài/ngày</span>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <BsPersonFillCheck size={16} />
                            <div className="flex flex-col">
                                <span>ThTheo dõi bởi</span>
                                <span>1 thành viên</span>
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
                    <div className="bg-white rounded-lg grid grid-cols-4 mb-1">
                        <div className="col-span-2 rounded bg-gradient-to-r to-cyan-500 from-blue-500">
                            <span className="text-white">Đăng kí theo dõi</span>
                        </div>
                        <div className="col-span-1"><span>Ghim</span></div>
                        <div className="col-span-1"><span>Chia sẻ</span></div>
                    </div>

                    <div className="bg-white rounded mb-1">
                        <span>Thảo luận</span>
                    </div>

                    <div className="rounded flex flex-row">
                        <div className="w-6 h-6 rounded-full bg-gray-400">

                        </div>
                        <div className="rounded-full bg-blue-500 flex-grow">
                            <span className="text-white">+ Tạo bài viết</span>
                        </div>
                        <BsImage size={16} />
                        <BiLink size={16} />
                    </div>
                    {/* List of posts */}
                    <PostItem/>
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