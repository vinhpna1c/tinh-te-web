import Image from 'next/image'

import Header from './components/Header'
import TagItem from './components/TagItem'
import ReelItem from './components/ReelItem'
import tags from '../utils/mockdata/tags'
import TopPostItem from './components/TopPostItem'
import styles from './home.module.scss'
import QuickPostItem from './components/QuickPostItem'



export default function Home() {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4'>
        <div className='flex flex-row overflow-x-auto'>
          <TagItem selected={true}>Home</TagItem>
          {tags.map((tag, index) => (<TagItem key={index}>{tag}</TagItem>))}
        </div>
        <div className='my-4'>
          <div className='flex flex-row justify-between items-center'>
            <h3 className={styles['heading_title']}>Tinhte Fact</h3>
            <span>
              <a className={styles['expand_title']} href='#'>Xem tất cả</a>
            </span>
          </div>
          <div className='flex flex-row overflow-x-scroll'>
            {[...Array(16)].map((i, index) => (<ReelItem key={index} />))}
          </div>
        </div>
        <div className='feed-container grid grid-cols-3 mt-4'>
          <div className='col-span-3 md:col-span-2'>
            <div className='grid grid-cols-3'>
              <div className='col-span-2'>
                <TopPostItem topContent={true} />
              </div>
              <div className='col-span-1'>
                <TopPostItem displayContent={true} />
              </div>
              {[...Array(3)].map((i, index) => <TopPostItem key={index} />)}
            </div>

          </div>
          <div className='col-span-3 md:col-span-1 my-2 pt-4'>
            <div className='flex flex-row justify-between'>
              <h3 className={styles['heading_title']}>Xem nhanh</h3>
              <span>
                <a className={styles['expand_title']} href='#'>Xem tất cả</a>
              </span>
            </div>
            <div className={`${styles['quick_feed_container']} px-4 pb-4`}>
            <QuickPostItem/>
              <QuickPostItem/>

              <QuickPostItem/>
              <QuickPostItem/>
              <QuickPostItem/>
              <QuickPostItem/>

              <QuickPostItem/>
              <QuickPostItem/>
              <QuickPostItem/>
              
            </div>
          </div>

        </div>
        <div>
          Bài viết nổi bật
        </div>
        <div>
          Tinh tế creator
        </div>
        <div>
          Top bài review
        </div>

      </div>


    </div>
  )
}
