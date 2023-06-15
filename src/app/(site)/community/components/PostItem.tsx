import { FiMoreHorizontal } from 'react-icons/fi'
import { BiComment } from 'react-icons/bi'
import { TbShare3 } from 'react-icons/tb'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import CommentItem from './CommentItem'
function PostItem() {
    return (
        <div className="rounded bg-white p-2 my-2">
            <div className="flex flex-row">
                <div className="rounded-full w-8 h-8 bg-gray-400"></div>
                <div className='flex-grow flex flex-col ml-2'>
                    <span className='font-bold text-lg'>P.V.Tuat</span>
                    <span className='text-gray-400 text-sm'><span className='text-yellow text-sm'>VIP</span> 2 tháng</span>
                </div>
                <FiMoreHorizontal size={24} />
            </div>
            <div>
                Content
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <MdOutlineFavoriteBorder size={24} />
                    20
                </div>
                <span><span className='text-blue-500'>152</span> bình luận</span>
            </div>
            <div className='grid grid-cols-3 border-y-2 border-y-gray-300'>
                <div className='flex flex-row justify-center p-2'>
                    <MdOutlineFavoriteBorder size={24} />
                    Thích
                </div>
                <div className='flex flex-row justify-center p-2'>
                    <BiComment size={24} />
                    Bình luận
                </div>
                <div className='flex flex-row justify-center p-2'>
                    <TbShare3 size={24} />
                    Chia sẻ
                </div>
            </div>
            <div className='comment-list'>
                <CommentItem/>
            </div>
        </div>
    )
}

export default PostItem;