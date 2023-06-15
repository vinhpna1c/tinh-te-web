'useclient'
import { FaRegUserCircle, FaUserEdit } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { IoMdMenu } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { HiOutlineUserCircle, HiOutlineLockClosed } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi'
import { Button, Menu, MenuButton, MenuItem, MenuList, Select, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '@/src/services/firebase.service';

export default function Header() {
    // const context= useContext(AppSessionContext);
    // const {amityClient} =context;
    
    const { user } = useAuth();
    console.log("current use: " + JSON.stringify(user))
    const navigation = useRouter();

    const logOut=()=>{
        signOut(auth)
    }

    return (
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row mr-2 items-center w-full">
                <img className="rounded-full mr-3" src="./images/logo.png" style={{ height: 40, }} />
                <div className='mr-8'>
                    <p>TINHTE</p>
                    <p>MẠNG XÃ HỘI</p>
                </div>
                <div className='flex flex-row px-8 py-2 rounded-full items-center md:w-1/4' style={{ backgroundColor: '#e5e6ed' }}>
                    <AiOutlineSearch size={24} />
                    <input
                        className='ml-2 w-full'
                        placeholder="Tìm sản phẩm công nghệ, cộng đồng, bạn bè, ..."
                        autoFocus={false}
                        style={{ backgroundColor: '#e5e6ed', border: 'none', outline: 'none' }} />


                </div>

            </div>
            <>
                {
                    user ?

                        <div className='flex flex-row items-center justify-end'>
                            <button className='bg-blue-500 rounded-full px-5 py-2 whitespace-nowrap text-white text-base mr-2'>Viết bài chia sẻ</button>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                                    <span className='rounded-full bg-purple-500 text-white text-xl w-8 h-8 flex justify-center items-center'>V</span>
                                </MenuButton>

                                <MenuList backgroundColor={'white'} borderRadius={4} boxShadow={'0px 0px 1px 1px #999999'}>
                                    <MenuItem color={"gray"} className=' px-2 pl-2 pr-4'><HiOutlineUserCircle className='mx-2' size={24} /> Trang cá nhân</MenuItem>
                                    <MenuItem color={"gray"} className='p-2'><FaUserEdit className='mx-2' size={24} /> Thông tin cá nhân</MenuItem>
                                    <MenuItem color={"gray"} className=' p-2'><HiOutlineLockClosed className='mx-2' size={24} /> Đổi mật khẩu</MenuItem>
                                    <MenuItem color={"gray"} className=' p-2'><AiOutlineSetting className='mx-2' size={24} /> Cài đặt</MenuItem>
                                    <MenuItem color={"gray"} className='p-2' onClick={()=>logOut()}><BiLogOut className='mx-2' size={24} /> Đăng xuất</MenuItem>

                                </MenuList>
                            </Menu>

                        </div>

                        :
                        <Menu >
                            <MenuButton as={Button}>
                                <span className="flex flex-row rounded-full items-center px-2 py-2" style={{ backgroundColor: '#E5E6ED', }}            >
                                    <FaRegUserCircle size={32} />
                                    <IoMdMenu className='ml-4' size={24} />

                                </span>
                            </MenuButton>

                            <MenuList backgroundColor={'white'} borderRadius={4} boxShadow={'0px 0px 2px 1px #999999'}>
                                <MenuItem padding={16} onClick={() => navigation.push("/login")} >Đăng nhập tài khoản</MenuItem>
                                <MenuItem padding={16} onClick={() => navigation.push("/sign_up")}>Đăng ký tài khoản mới</MenuItem>

                            </MenuList>
                        </Menu>
                }
            </>


            {/* <div id="dropdown" className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div> */}


        </div>
    )

}