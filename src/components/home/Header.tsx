import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';

export default function Header() {
    return (
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row">
                <img className="rounded-full mr-3" src="./images/logo.png" style={{ height: 40, }} />
                <div >
                    <p>TINHTE</p>
                    <p>MẠNG XÃ HỘI</p>
                </div>
                <input placeholder="Tìm sản phẩm công nghệ, cộng đồng, bạn bè, ..." />
            </div>
            <button className="flex flex-row rounded-full items-center px-2 py-0.5" style={{backgroundColor:'#E5E6ED'}}>
                <FaRegUserCircle size={32} />
                <IoMdMenu className='ml-4' size={24}/>
            </button>

        </div>
    )

}