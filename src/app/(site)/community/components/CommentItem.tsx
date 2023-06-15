import { FiMoreHorizontal } from 'react-icons/fi'
function CommentItem() {
    return (
        <div className=''>
            <div className="flex flex-row">
                <div className="rounded-full bg-gray-400 w-6 h-6">
                </div>
                <div className=" flex-grow rounded-md bg-blue-200 flex flex-col">
                    <div className="flex flex-row ">
                        <span>kynam91</span>
                        <div className="flex-grow ">
                            <span>Đại bàng</span>
                            <span>10 ngày</span>
                        </div>
                        <FiMoreHorizontal />
                    </div>
                    <div>
                Comment content
            </div>
                </div>

            </div>
            
        </div>
    )
}

export default CommentItem;