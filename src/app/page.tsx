'use client'
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
import ThreadColumn from './components/ThreadColumn'
import { useEffect } from 'react'
import AmityAuth from '../services/amity.auth.service'
import { initFirebase } from '../services/firebase.service';
import { use } from 'react'
import { useRouter } from 'next/navigation';
import { Client } from '@amityco/ts-sdk';

// export const getStaticProps: GetStaticProps<{
//   repo: Repo;
// }> = async () => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   return { props: { repo } };
// };

export default function Home() {
 

  try {
    console.log("Login page");
    const client = Client.getActiveClient();
    console.log(client);

  } catch (error) {
    console.log("Error get client from amity")
    // const amityUser = JSON.parse(window.sessionStorage.getItem('AMITY_USER') ?? '{}')
   

    // console.log(error)
  }

  const firebaseApp = initFirebase();
  console.log(firebaseApp);
  // const router = useRouter();

  return (
    <div>

      <Header />
      <NavBar />
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
                <a className={styles['expand_title']} href='/chuyen-trang-xem-nhanh'>Xem tất cả</a>
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
              <ThreadItem />
              <ThreadItem />
              <ThreadItem />
              <ThreadItem />
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
                <div className='col-span-2'>

                  <button
                    className='rounded-sm bg-gray-400 w-full px-4 py-2 text-sm font-normal'
                    onClick={() => {
                      // router.push('/community');
                    }}
                  >Xem tất cả (84)</button>

                </div>


              </div>
            </div>

          </div>

        </div>
        <div className='grid grid-cols-3 mt-3'>
          <div className='col-span-3 lg:col-span-2'>
            <div className='grid grid-cols-2'>
              <ThreadColumn />
              <ThreadColumn />

            </div>
          </div>

          <div className='flex flex-col col-span-3 lg:col-span-1 rounded'>
            <div className='grid grid-cols-2 rounded' style={{ backgroundColor: '#f2f4f7' }}>
              <div className='flex flex-row col-span-1 bg-gray-700 '>
                <span className='text-white font-medium p-2 text-sm'>
                  #TAG ĐANG HOT
                </span>

                <span className='relative top-6 right-[-42px] '>
                  <img className='w-[38px] h-auto' src='./images/tag_logo.png' />
                </span>
              </div>
              <div className='col-span-2 p-2'>
                <div className='grid grid-cols-3'>
                  <div className='flex flex-col items-start px-3'>
                    <img className='w-full h-[60px] rounded mb-2' src="https://photo2.tinhte.vn/data/attachment-files/2020/06/5060773_photo_2020-06-27_11.44.21.jpeg" />
                    <span className='font-medium text-sm '>#windows</span>
                  </div>
                  <div className='flex flex-col items-start px-3'>
                    <img className='w-full h-[60px] rounded mb-2' src="https://photo2.tinhte.vn/data/attachment-files/2020/06/5060774_photo_2020-06-27_11.44.49.jpeg" />
                    <span className='font-medium text-sm '>#android</span>
                  </div>
                </div>

              </div>

            </div>
            <div className='grid grid-cols-2 rounded mt-6' style={{ backgroundColor: '#f2f4f7' }}>
              <div className='flex flex-row col-span-1 bg-gray-700 '>
                <span className='text-white font-medium p-2 text-sm'>
                  #THỦ THUẬT TINH TẾ
                </span>

                <span className='relative top-6 right-[-42px] '>
                  <img className='w-[38px] h-auto' src='./images/setting_logo.png' />
                </span>
              </div>
              <div className='col-span-2 p-2'>
                <QuickPostItem />
                <QuickPostItem />

                <QuickPostItem />
                <QuickPostItem />

                <QuickPostItem />
                <QuickPostItem />
              </div>

            </div>

          </div>
        </div>



      </div>


    </div>
  )
}
