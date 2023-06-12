// type CommunityItemProps={
//     displayTopics?: boolean,
// }

function CommunityItem(props: {displayTopics?:boolean}) {
    return (
        <div className='flex flex-col items-start px-2 pb-1'>
            <span>
                <img className='rounded w-full' src='https://imgproxy7.tinhte.vn/335jFM98Ee_UTetCqLS9cDb7qrO8JLJ8tKpKTHPVOU0/h:144/plain/https://photo2.tinhte.vn/data/attachment-files/2023/04/6399434_og.jpg' />
            </span>
            <span className="text-gray-700 font-bold">STMN23</span>
            {props.displayTopics && <span className="text-gray-700 font-normal">0 chủ đề mới</span>}
        </div>
    );
}

export default CommunityItem;