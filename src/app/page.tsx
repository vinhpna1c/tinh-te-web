import Image from 'next/image'

import Header from './components/Header'
import TagItem from './components/TagItem'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap overflow-x-auto'>
          <TagItem selected={true}>Home</TagItem>
          <TagItem>#final cut pro ipad</TagItem>
          <TagItem>#apple store trực tiếp</TagItem>
          <TagItem>#thủ thuật</TagItem>
          <TagItem>#dịch vụ công</TagItem>
          <TagItem>#trên tay</TagItem>
        </div>
        <div className='flex flex-row justify-between'>
            <h3>Tinhte Fact</h3>
            <span>
              <a href='#'>Xem tất cả</a>
            </span>
          </div>

      </div>

    </div>
  )
}
