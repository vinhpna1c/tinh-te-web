import Image from 'next/image'

import Header from './sections/Header'
import TagItem from './components/TagItem'
import ReelItem from './components/ReelItem'
import tags from '../utils/mockdata/tags'
import TopPostItem from './components/TopPostItem'
import styles from './home.module.scss'
import QuickPostItem from './components/QuickPostItem'
import OutStandingPost from './components/OutStandingPost'
import CommunityItem from './components/CommunityItem'
import ComputexItem from './components/ComputexItem'
import ThreadItem from './components/ThreadItem'
import NavBar from './sections/NavBar'

export default function Home() {
  return (
    <div>
      
      <Header />
      <NavBar/>
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
          <div className='col-span-3 lg:col-span-2'>
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
          <div className='col-span-3 lg:col-span-1 my-2 pt-4'>
            <div className='flex flex-row justify-between'>
              <h3 className={styles['heading_title']}>Xem nhanh</h3>
              <span>
                <a className={styles['expand_title']} href='#'>Xem tất cả</a>
              </span>
            </div>
            <div className={`${styles['quick_feed_container']} px-4 pb-4`}>
              <QuickPostItem />
              <QuickPostItem />
              <QuickPostItem />
              <QuickPostItem />
              <QuickPostItem />
              <QuickPostItem />
              <QuickPostItem />
              <QuickPostItem />
              <QuickPostItem />

            </div>
          </div>

          <div className='col-span-3 lg:col-span-2'>
            <h1 className={styles['heading_title']}>Bài viết nổi bật</h1>
            <div className='grid grid-cols-2'>
              <OutStandingPost />
              <OutStandingPost />
              <OutStandingPost />
              <OutStandingPost />
              <OutStandingPost />
              <OutStandingPost />
            </div>

            <div className='rounded-xl p-4' style={{ backgroundColor: '#f2f4f7' }}>
              <img className='w-full' src='https://photo2.tinhte.vn/data/attachment-files/2023/05/6446330_tinhte_banner_hub_1920x250_2.jpg' />
              <div className='flex flex-row items-end'>
                <p className={styles.heading_title}>Tinhte tại Computex23 - triển lãm máy tính lớn nhất thế giới </p>
                <a className={styles['expand_title'] + ' ml-1'} href='#'>Xem ngay</a>
              </div>
              <div className='overflow-x-scroll mt-6 pb-1 flex flex-row '>
                {[...Array(16)].map((i, index) => (<ComputexItem key={index} />))}
              </div>

            </div>

            <div className='mt-6'>
              <ThreadItem/>
              <ThreadItem/>
              <ThreadItem/>
              <ThreadItem/>
            </div>

          </div>
          <div className='col-span-3 lg:col-span-1 pt-4 pr-5'>
            <span>
              <img className='rounded w-full' src='https://photo2.tinhte.vn/data/attachment-files/2021/05/5463805_top-banner-creator.png' />
            </span>
            <div className={`${styles['community_container']} w-full px-3 py-2 mt-4`}>
              <p className={styles['heading_title'] + ' mb-6'}>Cộng đồng</p>
              <div className='grid grid-cols-2'>
                <CommunityItem />
                <CommunityItem />
                <CommunityItem />
                <CommunityItem />
              </div>
            </div>

          </div>

        </div>
        <div className='grid grid-cols-3'>

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
