// type CommunityItemProps={
//     displayTopics?: boolean,
// }

import Link from "next/link";

function CommunityItem(props: {displayTopics?:boolean, imgURL?: string, badge?: string, itemnumber?: string}) {
    return (
        <Link href={'/community/1'}>
        
        <div className='flex flex-col items-start px-2 pb-1'>
            <span>
                <img className='rounded w-full' src={props.imgURL} />
            </span>
            <span className="text-gray-700 font-bold">{props.badge}</span>
            {props.displayTopics && <span className="text-gray-700 font-normal">{props.itemnumber} chủ đề mới</span>}
        </div>
        </Link>
    );
}

export default CommunityItem;