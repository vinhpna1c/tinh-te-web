import Image from 'next/image'

import Header from './components/Header'
import TagItem from './components/TagItem'
import ReelItem from './components/ReelItem'
import tags from '../utils/mockdata/tags'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4'>
        <div className='flex flex-row overflow-x-auto'>
          <TagItem selected={true}>Home</TagItem>
          {tags.map((tag)=>(<TagItem>{tag}</TagItem>))}
        </div>
        <div className='mt-4'>
          <div className='flex flex-row justify-between'>
            <h3>Tinhte Fact</h3>
            <span>
              <a href='#'>Xem tất cả</a>
            </span>
          </div>
          <div className='flex flex-row overflow-x-scroll'>
              <ReelItem/>
              <ReelItem/>
              <ReelItem/>
              <ReelItem/>
              <ReelItem/>
              <ReelItem/>
              <ReelItem/>

          </div>
        </div>

      </div>


    </div>
  )
}
