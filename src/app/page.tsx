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
import { useEffect, useState } from 'react'
import AmityAuth from '../services/amity.auth.service'
import { initFirebase } from '../services/firebase.service';
import { use } from 'react'
import { useRouter } from 'next/navigation';
import { Client } from '@amityco/ts-sdk';
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { tempDataCommunityItem } from '../utils/mockdata/community'
import { tempDataComputexItem, tempDataOutstandingPost, tempDataQuickPost, tempDataReel, tempDataThreadItem, tempDataTopPost } from '../utils/mockdata/post'
import { getTopLatestPost } from '../services/post.service'
import { Post } from '../models/domain/post'

// export const getStaticProps: GetStaticProps<{
//   repo: Repo;
// }> = async () => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   return { props: { repo } };
// };


export default function Home() {

  const firebaseApp = initFirebase();

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getTopLatestPost().then((value) => {
      console.log("Query result: " + JSON.stringify(value))
      setPosts(value);
    })

  }, [])

  return (
    <div>
      <Header />
      <NavBar />
      <div className='container mx-auto px-4'>
        <div className='flex flex-row overflow-x-auto'>
          <TagItem selected={true}>Home</TagItem>
          {tags.map((tag, index) => {
            return (
              <TagItem key={index}>{tag}</TagItem>
            )
          }
          )}
        </div>
        <div className='my-4'>
          <div className='flex flex-row justify-between items-center'>
            <h3 className={styles['heading_title']}>Tinhte Fact</h3>
            <span>
              <a className={styles['expand_title']} href='#'>Xem tất cả</a>
            </span>
          </div>
          <div className='flex flex-row overflow-x-scroll'>
            {
              tempDataReel.map((item, index) => {
                return (
                  <Link key={index} href="/thread/1">
                    <ReelItem imgURL={item.imgURL} />
                  </Link>
                )
              }
              )
            }
          </div>
        </div>
        <div className='feed-container grid grid-cols-3 mt-4'>
          <div className='col-span-3 lg:col-span-2'>
            <div className='grid grid-cols-3'>
              <div className='col-span-2'>
                <Link href="/thread/1">
                  <TopPostItem topContent={true}
                    postImageURL='https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg'
                    title='Những điều thú vị về chim cánh cụt'
                    author='Ng Minh Hằng'
                    content='Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.'
                  />
                </Link>
              </div>
              <div className='col-span-1'>
                <Link href="/thread/1">
                  <TopPostItem displayContent={true}
                    postImageURL='https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg'
                    title='Những điều thú vị về chim cánh cụt'
                    author='Ng Minh Hằng'
                    content='Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.'
                  />
                </Link>
              </div>
              {
                posts.slice(0, 3).map((item, index) => {
                  const postData = item;
                  const itemData = {
                    displayContent: false,
                    // topContent?: boolean | undefined;
                    postImageURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6462415_Cover-LM.jpg",
                    title: postData.Title,
                    author: postData.Code,
                    content: postData.Content,
                  };
                  return (
                    <Link href={{ 
                      pathname: "/thread/" + item.Code, 
                      // query:JSON.stringify(item),
                    }}>
                      <TopPostItem key={index} postImageURL={itemData.postImageURL} title={itemData.title} author={itemData.author} content={itemData.content} />
                    </Link>
                  )
                })
              }
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
              {
                tempDataQuickPost.map((item, index) => {
                  return (
                    <Link key={index} href="/thread/1">
                      <QuickPostItem title={item.title} imgURL={item.imgUrl} />
                    </Link>
                  )
                })
              }
            </div>
          </div>

          <div className='col-span-3 lg:col-span-2'>
            <h1 className={styles['heading_title']}>Bài viết nổi bật</h1>
            <div className='grid grid-cols-2'>
              {
                tempDataOutstandingPost.map((item, index) => {
                  return (
                    <Link key={index} href="/thread/1">
                      <OutStandingPost rank={item.rank} title={item.title} author={item.author} />
                    </Link>
                  )
                })
              }
            </div>

            <div className='rounded-xl p-4' style={{ backgroundColor: '#f2f4f7' }}>
              <img className='w-full' src='https://photo2.tinhte.vn/data/attachment-files/2023/05/6446330_tinhte_banner_hub_1920x250_2.jpg' />
              <div className='flex flex-row items-end'>
                <p className={styles.heading_title}>Tinhte tại Computex23 - triển lãm máy tính lớn nhất thế giới </p>
                <a className={styles['expand_title'] + ' ml-1'} href='#'>Xem ngay</a>
              </div>
              <div className='overflow-x-scroll mt-6 pb-1 flex flex-row '>
                {
                  tempDataComputexItem.map((item, index) => {
                    return (
                      <Link key={index} href="/thread/1">
                        <ComputexItem key={index} imgURL={item.imgURL} title={item.title} />
                      </Link>
                    )
                  }
                  )
                }
              </div>

            </div>

            <div className='mt-6'>
              {tempDataThreadItem.map((item, index) => {
                return (
                  <Link key={index} href="/thread/1">
                    <ThreadItem imgURL={item.imgURL} title={item.title} content={item.content} author={item.author} />
                  </Link>
                )
              })}
            </div>

          </div>
          <div className='col-span-3 lg:col-span-1 pt-4 pr-5'>
            <span>
              <img className='rounded w-full' src='https://photo2.tinhte.vn/data/attachment-files/2021/05/5463805_top-banner-creator.png' />
            </span>
            <div className={`${styles['community_container']} w-full px-3 py-2 mt-4`}>
              <p className={styles['heading_title'] + ' mb-6'}>Cộng đồng</p>
              <div className='grid grid-cols-2'>
                {
                  tempDataCommunityItem.map((item, index) => {
                    return (
                      <Link key={index} href="/thread/1">
                        <CommunityItem imgURL={item.imgURL} badge={item.badge} itemnumber={item.itemnumber} />
                      </Link>
                    )
                  })
                }
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
                {
                  tempDataQuickPost.map((item, index) => {
                    return (
                      <Link key={index} href="/thread/1">
                        <QuickPostItem title={item.title} imgURL={item.imgUrl} />
                      </Link>
                    )
                  })
                }
              </div>

            </div>

          </div>
        </div>



      </div>


    </div>
  )
}
