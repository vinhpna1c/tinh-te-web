import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../sections/Header'
import NavBar from '../sections/NavBar'



export default function PersonalInformation() {
  return (
    
      <div>
        <div className='flex flex-col items-center max-w-full'>
          <div className='flex max-h-auto mb-9 w-3/4 justify-start'>
            <div className='w-auto h-auto align-middle font-extrabold uppercase '>thông tin cá nhân</div>
          </div>
          {/* start information user */}
          <div className='flex max-h-max w-3/4 justify-center text-sm'>
            <div className='flex flex-col w-3/4'>
              <div className='flex flex-col border-b  border-b-gray-400'>
                <div className='flex flex-row max-w-full'>
                  <div className='w-1/2 flex justify-end pr-3'>Họ và tên:</div>
                  <div className='w-1/2'>Vinh Phan</div>
                </div>
                <div className='flex flex-row justify-center max-w-full'>
                  <div className='w-1/2 flex justify-end pr-3'>Số điện thoại:</div>
                  <div className='w-1/2'>09123456789</div>
                </div>
                <div className='flex flex-row justify-center max-w-full mb-6'>
                  <div className='w-1/2 flex justify-end pr-3'>Email:</div>
                  <div className='w-1/2'>vinhphanbcd@gmail.com</div>
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
              <div>


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

      </div>
    
  )
}