import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdMenu } from 'react-icons/io';

export default function Header() {
    return (
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row mr-2 items-center w-full">
                <img className="rounded-full mr-3" src="./images/logo.png" style={{ height: 40, }} />
                <div className='mr-8'>
                    <p>TINHTE</p>
                    <p>MẠNG XÃ HỘI</p>
                </div>
                <div className='flex flex-row px-8 py-4 rounded-full items-center h-full md:w-1/4' style={{ backgroundColor: '#e5e6ed' }}>
                <AiOutlineSearch size={24} />
                    <input 
                    className='ml-2 w-full'
                    placeholder="Tìm sản phẩm công nghệ, cộng đồng, bạn bè, ..." 
                    autoFocus={false} 
                    style={{ backgroundColor: '#e5e6ed' , border:'none',outline:'none'}}/>
                        
                    
                </div>

            </div>
            <button className="flex flex-row rounded-full items-center px-2 py-0.5" style={{ backgroundColor: '#E5E6ED', }}>
                <FaRegUserCircle size={32} />
                <IoMdMenu className='ml-4' size={24} />
            </button>

        </div>
    )

}