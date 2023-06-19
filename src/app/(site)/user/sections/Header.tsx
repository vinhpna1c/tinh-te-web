import React from 'react'
import { AiFillEdit } from 'react-icons/ai'

export default function UserHeader() {
  return (
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
            <div className='flex justify-center flex-row gap-10 mt-3'>
              <div className='w-2/5 text-center indent-9 leading-loose font-medium' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et tempor incididunt dolore magna labore.
              Youtube: https://www.youtube.com/watch?v=dO4dncwDn6U
              </div>
            </div>
          </div>
        </div>
  )
}
