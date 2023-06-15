'use client'
import CommunityItem from "../../components/CommunityItem";
import Header from "../../sections/Header";


function TopCommunityItem(props: {
    communityName: string,
    communityId?: string,
}) {
    return (
        <a href={props.communityId &&`/community/${props.communityId}`}>
            <span className="text-gray-600 hover:text-cyan-300">{props.communityName}</span>
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
                    <TopCommunityItem communityName="STMN 23"/>
                    <TopCommunityItem communityName="Máy đọc sách"/>
                    <TopCommunityItem communityName="On The Road"/>
                    <TopCommunityItem communityName="MacBook"/>
                    <TopCommunityItem communityName="Flyfood"/>

                </div>
            </div>
            {/* Community list */}
            <div className="w-full lg:max-w-[1300px] m-4">
                <span className="text-gray-700 font-bold">Danh sách cộng đồng</span>
                <div className="flex flex-wrap justify-between items-start">
                    <CommunityItem  displayTopics/>
                    <CommunityItem displayTopics/>
                    <CommunityItem displayTopics/>
                    <CommunityItem displayTopics/>
                    <CommunityItem displayTopics/>
                    <CommunityItem displayTopics/>
                    <CommunityItem displayTopics/>

                </div>
            </div>

        </div>

    )
}