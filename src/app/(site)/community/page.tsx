'use client'
import { tempDataCommunityItem } from "@/src/utils/mockdata/community";
import CommunityItem from "../../components/CommunityItem";
import Header from "../../sections/Header";


function TopCommunityItem(props: {
    communityName: string,
    communityId?: string,
    isLast?: boolean,
}) {
    return (
        <a href={props.communityId && `/community/${props.communityId}`}>
            <span className="text-gray-600 hover:text-cyan-300 mr-1">{props.communityName}{(!props.isLast) && '|'}</span>
        </a>

    )
}

export default function CommunityList() {
    //call function to fetch communities here
    return (
        <div>
            <Header />
            {/* Search Section */}
            <div className="flex flex-col items-center justify-center p-[30px]" style={{ backgroundColor: '#01152f' }}>
                <span className="text-white py-3 text-2xl ">Cộng đồng</span>
                <input className="rounded bg-white px-2 py-1  w-full md:w-[400px]" type="text" placeholder="Tìm tên cộng đồng, sản phẩm, thiết bị,..." />
                <div className="flex justify-center">
                    <TopCommunityItem communityName="STMN 23" />
                    <TopCommunityItem communityName="Máy đọc sách" />
                    <TopCommunityItem communityName="On The Road" />
                    <TopCommunityItem communityName="MacBook" />
                    <TopCommunityItem communityName="Flyfood" isLast />

                </div>
            </div>
            {/* Community list */}
            <div className="flex flex-wrap w-full justify-center m-4">
                <div className="w-full">
                <span className="text-gray-700 font-bold">Danh sách cộng đồng</span>
                </div>
                
                <div className="flex flex-wrap justify-center items-start  max-w-[1300px]">
                {tempDataCommunityItem.map((item,index)=>{
                    return (<CommunityItem {...item} key={index} displayTopics={false}/>)
                })}

                </div>
            </div>

        </div>

    )
}