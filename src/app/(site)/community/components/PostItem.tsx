import { FiMoreHorizontal } from 'react-icons/fi'
import { BiComment } from 'react-icons/bi'
import { TbShare3 } from 'react-icons/tb'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import CommentItem from './CommentItem'
function PostItem() {
    return (
        <div className="rounded bg-white p-2 my-2">
            <div className="flex flex-row">
                <div className="rounded-full w-6 h-6 bg-gray-400"></div>
                <div className='flex-grow flex flex-col'>
                    <span>P.V.Tuat</span>
                    <span>VIP 2 tháng</span>
                </div>
                <FiMoreHorizontal size={24} />
            </div>
            <div>
                Content
            </div>
            <div className='flex flex-row justify-between'>
                <div>
                    <MdOutlineFavoriteBorder />
                    20
                </div>
                <span>152 bình luận</span>
            </div>
            <div className='grid grid-cols-3 border-y-2 border-y-gray-300'>
                <div className='flex flex-row justify-center'>
                    <MdFavorite />
                    Thích
                </div>
                <div className='flex flex-row justify-center'>
                    <BiComment />
                    Bình luận
                </div>
                <div className='flex flex-row justify-center'>
                    <TbShare3 />
                    Chia sẻ
                </div>
            </div>
            <div>
                <CommentItem/>
            </div>
        </div>
    )
}

export default PostItem;