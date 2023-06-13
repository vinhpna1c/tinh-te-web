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

const tempDataQuickPost = [
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  },
  {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
  }
]

const tempDataOutstandingPost = [
  {
    rank: "1",
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    author: "Ruby Lee",
  },
  {
    rank: "2",
    title: "Apple Watch và những thay đổi mới",
    author: "Christine Ha",
  },
  {
    rank: "3",
    title: "Gã khổng lồ công nghệ và những giá trị cốt lõi",
    author: "Ruby Lee",
  },
  {
    rank: "4",
    title: "Điện thoại không xài ốp lưng",
    author: "Ruby Lee",
  },
  {
    rank: "5",
    title: "Samsung vs Apple - sự đối đầu giữa 2 đế chế",
    author: "Blue",
  },
  {
    rank: "6",
    title: "Những bí ẩn công nghệ",
    author: "Ruby Lee",
  }
]

const tempDataThreadItem = [
  {
    imgURL: "https://imgproxy7.tinhte.vn/xacq4TZLarFBzsyx4f37F1MIUK4k6nTHPTUuQqE87Z0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446077_tinhte-cover-sac.jpg",
    title: "Mua thử 2 cục sạc Retro 35W và 67W ở Việt Nam - Thiết kế hoài cổ, nhỏ gọn - giá còn hơi cao",
    content: "Video Unbox và thiết kế của Shargeek 35W & 67W Thiết kế - điểm đặc biệt trên cả 2 mẫu sạc Retro Cách đóng gói của cả 2 chiếc sạc đem đến ngay sự hoài cổ, cục sạc 35W Retro với hình ảnh của chiếc Apple Macintosh đời đầu…",
    author: "Lab Review",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/xacq4TZLarFBzsyx4f37F1MIUK4k6nTHPTUuQqE87Z0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446077_tinhte-cover-sac.jpg",
    title: "Mua thử 2 cục sạc Retro 35W và 67W ở Việt Nam - Thiết kế hoài cổ, nhỏ gọn - giá còn hơi cao",
    content: "Video Unbox và thiết kế của Shargeek 35W & 67W Thiết kế - điểm đặc biệt trên cả 2 mẫu sạc Retro Cách đóng gói của cả 2 chiếc sạc đem đến ngay sự hoài cổ, cục sạc 35W Retro với hình ảnh của chiếc Apple Macintosh đời đầu…",
    author: "Lab Review",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/xacq4TZLarFBzsyx4f37F1MIUK4k6nTHPTUuQqE87Z0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446077_tinhte-cover-sac.jpg",
    title: "Mua thử 2 cục sạc Retro 35W và 67W ở Việt Nam - Thiết kế hoài cổ, nhỏ gọn - giá còn hơi cao",
    content: "Video Unbox và thiết kế của Shargeek 35W & 67W Thiết kế - điểm đặc biệt trên cả 2 mẫu sạc Retro Cách đóng gói của cả 2 chiếc sạc đem đến ngay sự hoài cổ, cục sạc 35W Retro với hình ảnh của chiếc Apple Macintosh đời đầu…",
    author: "Lab Review",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/xacq4TZLarFBzsyx4f37F1MIUK4k6nTHPTUuQqE87Z0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446077_tinhte-cover-sac.jpg",
    title: "Mua thử 2 cục sạc Retro 35W và 67W ở Việt Nam - Thiết kế hoài cổ, nhỏ gọn - giá còn hơi cao",
    content: "Video Unbox và thiết kế của Shargeek 35W & 67W Thiết kế - điểm đặc biệt trên cả 2 mẫu sạc Retro Cách đóng gói của cả 2 chiếc sạc đem đến ngay sự hoài cổ, cục sạc 35W Retro với hình ảnh của chiếc Apple Macintosh đời đầu…",
    author: "Lab Review",
  }
]

const tempDataCommunityItem = [
  {
    imgURL: "https://imgproxy7.tinhte.vn/335jFM98Ee_UTetCqLS9cDb7qrO8JLJ8tKpKTHPVOU0/h:144/plain/https://photo2.tinhte.vn/data/attachment-files/2023/04/6399434_og.jpg",
    badge: "STMN23",
    itemnumber: "0"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/335jFM98Ee_UTetCqLS9cDb7qrO8JLJ8tKpKTHPVOU0/h:144/plain/https://photo2.tinhte.vn/data/attachment-files/2023/04/6399434_og.jpg",
    badge: "STMN23",
    itemnumber: "0"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/335jFM98Ee_UTetCqLS9cDb7qrO8JLJ8tKpKTHPVOU0/h:144/plain/https://photo2.tinhte.vn/data/attachment-files/2023/04/6399434_og.jpg",
    badge: "STMN23",
    itemnumber: "0"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/335jFM98Ee_UTetCqLS9cDb7qrO8JLJ8tKpKTHPVOU0/h:144/plain/https://photo2.tinhte.vn/data/attachment-files/2023/04/6399434_og.jpg",
    badge: "STMN23",
    itemnumber: "0"
  }
]

const tempDataReel = [
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
  }
]

const tempDataTopPost = [
  {
    postImageURL: 'https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg',
    title: 'Những điều thú vị về chim cánh cụt',
    author: 'Ng Minh Hằng',
    content: 'Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.',
  },
  {
    postImageURL: 'https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg',
    title: 'Những điều thú vị về chim cánh cụt',
    author: 'Ng Minh Hằng',
    content: 'Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.',
  },
  {
    postImageURL: 'https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg',
    title: 'Những điều thú vị về chim cánh cụt',
    author: 'Ng Minh Hằng',
    content: 'Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.',
  }
]

const tempDataComputexItem = [
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  },
  {
    imgURL: "https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg",
    title: "Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng"
  }
]

export default function Home() {


  // try {
  //   console.log("Login page");
  //   const client = Client.getActiveClient();
  //   console.log(client);

  // } catch (error) {
  //   console.log("Error get client from amity")
  //   // const amityUser = JSON.parse(window.sessionStorage.getItem('AMITY_USER') ?? '{}')


  //   // console.log(error)
  // }

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
            {
              tempDataReel.map((item, index) => (<ReelItem key={index} imgURL={item.imgURL} />))
            }
          </div>
        </div>
        <div className='feed-container grid grid-cols-3 mt-4'>
          <div className='col-span-3 lg:col-span-2'>
            <div className='grid grid-cols-3'>
              <div className='col-span-2'>
                <TopPostItem topContent={true}
                  postImageURL='https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg'
                  title='Những điều thú vị về chim cánh cụt'
                  author='Ng Minh Hằng'
                  content='Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.'
                />
              </div>
              <div className='col-span-1'>
                <TopPostItem displayContent={true}
                  postImageURL='https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg'
                  title='Những điều thú vị về chim cánh cụt'
                  author='Ng Minh Hằng'
                  content='Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.'
                />
              </div>
              {
                tempDataTopPost.map((item, index) => {
                  return (
                    <TopPostItem key={index} postImageURL={item.postImageURL} title={item.title} author={item.author} content={item.content} />
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
                    <QuickPostItem title={item.title} imgURL={item.imgUrl} />
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
                    <OutStandingPost rank={item.rank} title={item.title} author={item.author} />
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
                      <ComputexItem key={index} imgURL={item.imgURL} title={item.title} />
                    )
                  }
                  )
                }
              </div>

            </div>

            <div className='mt-6'>
              {tempDataThreadItem.map((item, index) => {
                return (
                  <ThreadItem imgURL={item.imgURL} title={item.title} content={item.content} author={item.author} />
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
                      <CommunityItem imgURL={item.imgURL} badge={item.badge} itemnumber={item.itemnumber} />
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
                      <QuickPostItem title={item.title} imgURL={item.imgUrl} />
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
