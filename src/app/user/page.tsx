import React from 'react'
import Image from 'next/image'
import { BsFillEggFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import Link from 'next/link'
import Header from '../sections/Header'
import NavBar from '../sections/NavBar'

export default function Profile() {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center max-w-full'>
        {/*-----------start head-----------*/}
        <div className='flex justify-center w-full bg-gradient-to-r from-gray-200 via-cyan-300 to-blue-400'>
          <div className="h-auto w-4/5 flex flex-col flex-wrap justify-center items-center mt-7 mb-7">
            <div className="">
              <img className='rounded-full' style={{ width: '112px', height: '112px' }}
                src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" />
            </div>
            <div className='font-semibold'>
              Le Thuan
            </div>
            <div className='flex flex-row gap-10'>
              <div className='flex flex-row gap-2'>
                <h1 className='font-light text-slate-700'>Cấp thành viên:</h1>
                <div className='flex gap-'>
                  <img className='w-4 h-5 mr-1' src="https://tinhte.vn/styles/default/TinhteMods/ranks/rank_active_9999@2x.png" alt="" />
                  <h2 className='font-medium text-slate-800'>Trứng</h2>

                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <h1 className='font-light text-slate-700'>Tuổi 1C:</h1>
                <div className='font-medium text-slate-800'>
                  <h2>4h</h2>
                </div>
              </div>
            </div>
            <div className='flex flex-row gap-10'>
              <div className='flex flex-row gap-2'>
                <h1 className='font-light text-slate-700'>Bài đã đăng:</h1>
                <div className='font-medium text-slate-800'>
                  <h2>4</h2>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <h1 className='font-light text-slate-700'>Lượt Like:</h1>
                <div className='font-medium text-slate-800'>
                  <h2>2</h2>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <h1 className='font-light text-slate-700'>Lượt theo dõi:</h1>
                <div className='font-medium text-slate-800'>
                  <h2>0</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------end head-------------*/}
        {/* start menu */}
        <div className='h-10 w-3/4 flex flex-wrap justify-between font-medium mt-4 mb-4 border-b border-b-gray-400'>
          <div className='flex flex-row gap-10'>
            <div>
              <Link href='/'>Tường nhà</Link>
            </div>
            <div>
              <Link href='/'>Album và ảnh</Link>
            </div>
            <div>
              <Link href='/'>Thông tin cá nhân</Link>
            </div>
          </div>
          <div>
            <div className='w-48 bg-blue-100 text-blue-600 rounded-2xl drop-shadow-xl hover:bg-blue-200'>
              <span className='flex'>
                <Link href='/' className='ml-2'>Đăng Bài Viết Ngay</Link><br />
                <AiFillEdit size={22} />
              </span>
            </div>
          </div>
        </div>
        {/* end menu */}
        <div className='flex max-h-auto mb-9 w-3/4 justify-start'>
          <div className='w-auto h-auto align-middle font-extrabold uppercase '>thông tin cá nhân</div>
        </div>
        {/* start information user */}
        <div className='flex max-h-max w-3/4 justify-center'>
          <div className='flex flex-col w-3/4'>
            <div className='flex flex-col border-b  border-b-gray-400'>
              <div className='flex flex-row max-w-full'>
                <div className='w-1/2 flex justify-end pr-3'>Họ và tên:</div>
                <div className='w-1/2'>Lê Văn Thuận</div>
              </div>
              <div className='flex flex-row justify-center max-w-full'>
                <div className='w-1/2 flex justify-end pr-3'>Số điện thoại:</div>
                <div className='w-1/2'>09123456789</div>
              </div>
              <div className='flex flex-row justify-center max-w-full mb-6'>
                <div className='w-1/2 flex justify-end pr-3'>Email:</div>
                <div className='w-1/2'>thuanbcd@gmail.com</div>
              </div>
            </div>

            <div className='flex flex-col border-b mt-2 border-b-gray-400'>
              <div className='flex flex-row justify-center max-w-full'>
                <div className='w-1/2 flex justify-end pr-3'>Giới tính:</div>
                <div className='w-1/2'>
                  <input type="radio" className='mr-2' id="male" name="gender" value="Male" />
                  <label>Nam</label><br></br>
                  <input type="radio" className='mr-2' id="female" name="gender" value="Female" />
                  <label>Nữ</label><br></br>
                  <input type="radio" className='mr-2' id="other" name="gender" value="Other" />
                  <label>Khác</label><br></br>
                </div>
              </div>
              <div className='flex flex-row justify-center max-w-full mb-6'>
                <div className='w-1/2 flex justify-end pr-3'>Ngày sinh:</div>
                <div className='w-1/2'>01/02/2023</div>
              </div>
            </div>
            <div className='flex flex-col h-auto  mt-2'>
              <div className='flex flex-row justify-center mt-2 max-w-full'>
                <div className='w-1/2 flex justify-end pr-3'>Địa chỉ:</div>
                <div className='w-1/2'>
                  <input type="text" placeholder="Địa chỉ của bạn"
                    className="mr-2 w-full border-2 bg-slate-100 outline-none focus:outline-none" />              </div>
              </div>
              <div className='flex flex-row justify-center  mt-2 max-w-full'>
                <div className='w-1/2 flex justify-end pr-3'>Nghề nghiệp:</div>
                <div className='w-1/2'>
                  <input type="text" placeholder="Nghề nghiệp của bạn"
                    className="mr-2 w-full border-2  bg-slate-100 outline-none focus:outline-none" />              </div>
              </div>
              <div className='flex flex-row justify-center mt-2 mb-6 max-w-full'>
                <div className='w-1/2 flex justify-end pr-3'>Trang chủ:</div>
                <div className='w-1/2'>
                  <input type="text" placeholder="Trang chủ của bạn"
                    className="mr-2 w-full border-2 bg-slate-100 outline-none focus:outline-none" />              </div>
              </div>
              <div className='flex flex-row justify-center mt-2 mb-6 max-w-full'>
                <div className='w-1/2 flex justify-end pr-3'>Về bạn:</div>
                <div className='w-1/2'>
                  <textarea typeof="textarea" placeholder="Mô tả thêm về bạn"
                    className="mr-2 w-full border-2 bg-slate-100 outline-none focus:outline-none" />              </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='max-w-max mx-4 my-3 mb-5 bg-orange-300 rounded-2xl drop-shadow-xl hover:bg-orange-500'>
                <span className='flex'>
                  <Link href='/' className='mx-4 my-3'>Lưu thay đổi</Link><br />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* end information user */}
      </div>
      <NavBar/>
    </div>
  )
}