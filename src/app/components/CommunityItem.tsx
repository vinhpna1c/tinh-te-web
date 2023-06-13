// type CommunityItemProps={
//     displayTopics?: boolean,
// }

function CommunityItem(props: {displayTopics?:boolean, imgURL: string, badge: string, itemnumber: string}) {
    return (
        <div className='flex flex-col items-start px-2 pb-1'>
            <span>
                <img className='rounded w-full' src={props.imgURL} />
            </span>
            <span className="text-gray-700 font-bold">{props.badge}</span>
            {props.displayTopics && <span className="text-gray-700 font-normal">{props.itemnumber} chủ đề mới</span>}
        </div>
    );
}

export default CommunityItem;