import React from 'react'
import Link from 'next/link'
import { AiFillEdit } from 'react-icons/ai'
export default function UserNavBar() {
  return (
    <div className='h-10 w-3/4 flex flex-wrap justify-between font-medium mt-4 mb-4 border-b border-b-gray-400'>
    <div className='flex flex-row gap-10'>
      <div className='hover:border-b-4 border-b-blue-300'>
        <Link href='/'>Tường nhà</Link>
      </div>
      <div className='hover:border-b-4 border-b-blue-300'>
        <Link href='/'>Album và ảnh</Link>
      </div>
      <div className='border-b-4 border-b-blue-700'>
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
  )
}
