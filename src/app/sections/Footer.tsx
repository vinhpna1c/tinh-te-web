import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaFlickr } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import '../sections/stylesFooter.css'

export default function Footer1() {
    return (
      <div className='' style={{background:'#1570EF'}}>
        <div className='flex flex-row justify-center flex-wrap text-slate-950 bg-gray-100 max-w-full h-auto'>
          <div className='xl:h-56 xl:w-1/6 mt-7 mb-7 ml-4 mr-4'>
            <div className='mt-1 mb-3 font-bold text-sm'>
              Tinh tế<br />
            </div>
            <div className='list-outside'>
              Nội quy diễn đàn <br />
              Thỏa thuận sử dụng dịch vụ<br />
              Góp ý<br />
              Hỗ trợ, hướng dẫn<br />
              Liên hệ quảng cáo<br />
              Tinh tế RSS<br />
            </div>
          </div>
  
          <div className='xl:h-56 xl:w-1/6 mt-7 mb-7 ml-4 mr-4'>
            <div className='mt-1 mb-3 font-bold text-sm'>
              Cộng đồng<br />
            </div>
            <div className='list-outside'>
              Điện thoại<br />
              Máy tính<br />
              Camera<br />
              Xe<br />
              Khoa học công nghệ<br />
            </div>
          </div>
          <div className='xl:h-56 xl:w-1/6 mt-7 mb-7 ml-4 mr-4'>
            <div className='mt-1 mb-3 font-bold text-sm'>
              Nhật Tảo<br />
            </div>
            <div className='list-outside'>
              Mua bán điện thoại <br />
              Mua bán máy tính<br />
              Mua bán máy tính bảng<br />
              Mua bán camera<br />
              Mua bán đồng hồ thông minh<br />
              Mua bán xe<br />
              Mua bán điện máy<br />
              Mua bán sim, sim 3G<br />
            </div>
          </div>
          <div className='xl:h-56 xl:w-1/6 mt-7 mb-7 ml-4 mr-4'>
            <div className='mt-1 mb-3 font-bold text-sm'>
              Theo dõi chúng tôi <br />
            </div>
            <div className='list-outside'>
              <span className='flex '>
                <AiFillFacebook className='mr-1' size={22} />
                   Facebook<br />
              </span>
              <span className='flex '>
                <AiFillYoutube className='mr-1' size={22} />
                 Youtube<br />
              </span>
              <span className='flex'>
                <FaFlickr className='mr-1' size={22}/>
                 Flickr<br />
              </span>
              <span className='flex'>
                <AiOutlineTwitter className='mr-1' size={22} />
                Twitter<br />
              </span>
            </div>
          </div>
          <div className='f_footer'> </div>
          <div className='flex flex-wrap justify-center gap-3 mb-4 w-4/5 text-center m-auto' style={{fontSize: '11px', lineHeight:'15px'}}>
            <div className='w-auto h-3'>Chịu trách nhiệm nội dung: Trần Mạnh Hiệp</div>
            <div className='w-auto h-3'>© 2023 Công ty Cổ phần MXH Tinh Tế</div>
            <div className='w-auto h-3'>Địa chỉ: Số 70 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Quận 3, TPHCM</div>
            <div className='w-auto h-3'>Số điện thoại: 02862713156</div>
            <div className='w-auto h-3'>MST: 0313255119</div>
            <div>Giấy phép thiết lập MXH số 11/GP-BTTTT, Ký ngày: 08/01/2019</div>
          </div>
        </div>
      </div>
    )
  }
  