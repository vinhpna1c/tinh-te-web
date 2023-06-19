import Link from "next/link"
import PinnedPosts from "./PinnedPosts"
import ReelItem from "./ReelImtem"
import CatalogUserItem from "./CatalogUserItem"

const tempDataReel = [
    {
      imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463094_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463095_AAPL_2023-06-13_11-05-16.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463085_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463087_b5c500625d466fda76e9657f1f1d1571.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463080_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463061_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463054_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463048_IMG_0754.jpeg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463040_Zentalk-thumb-trai-nghiem-tren-asus-tuf-gaming-a-15-2023.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463033_5355cecaa2b2e8644ac8f8c7ea307434.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463029_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6462979_apple-music-08_1280x720-800-resize.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6462990_IMG_5333.jpeg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6462999_IMG_5334.jpeg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463010_image.jpg",
    }
  ]
const tempDataPinnedPosts = [
    {
      imgURL: "https://imgproxy7.tinhte.vn/dOLn-d_19yHj5h1G2l8CHV-aURqq6Ygi87Yk8qMYeXA/w:400/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6443237_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463094_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463095_AAPL_2023-06-13_11-05-16.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463085_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463087_b5c500625d466fda76e9657f1f1d1571.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463080_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463061_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463054_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463048_IMG_0754.jpeg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463040_Zentalk-thumb-trai-nghiem-tren-asus-tuf-gaming-a-15-2023.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463033_5355cecaa2b2e8644ac8f8c7ea307434.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463029_image.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6462979_apple-music-08_1280x720-800-resize.jpg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6462990_IMG_5333.jpeg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6462999_IMG_5334.jpeg",
    },
    {
      imgURL: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6463010_image.jpg",
    }
  ]
  const tempDataCatalog = [
    {
      title: "Thông tin công nghệ",
    },
    {
      title: "Cà phê tinh tế",
    },
    {
      title: "Khoa học",
    },
    {
      title: "Điện tử tiêu dùng",
    },
    {
      title: "Tư vấn chọn mua máy tính",
    },
    {
      title: "Du lịch",
    },
    {
      title: "Sức khỏe",
    },
    {
      title: "Iphone,Ipad,IOS",
    },
    {
      title: "macOS",
    },
    {
      title: "macOS",
    },
    {
      title: "Thông tin công nghệ",
    },
    {
      title: "Cà phê tinh tế",
    },
    {
      title: "Khoa học",
    },{
      title: "Thông tin công nghệ",
    },
    {
      title: "Cà phê tinh tế",
    },
    {
      title: "Khoa học",
    },
    {
      title: "Điện tử tiêu dùng",
    },
    {
      title: "Tư vấn chọn mua máy tính",
    }
  ]
  

export default function HomeWall (){
    return (
        <div>
        <div className='flex flex-col items-center max-w-full'>
          <div className='flex max-h-auto mb-9 w-3/4 justify-start'>
            <div className='w-auto h-auto align-middle font-extrabold uppercase '>Tường nhà bạn</div>
          </div>
          {/* start information user */}
          <div className='flex max-h-max w-3/4 gap-5 justify-center text-sm'>
            {/* col left */}
            <div className='w-1/4 '>
              <div className='flex max-h-max flex-col p-3 shadow-md rounded-lg border mb-5'>
                <div className='flex flex-row justify-between'>
                  <div className='max-w-max font-medium mb-2 sm:truncate md:truncate '>Huy hiệu đạt đc</div>
                  <div className='max-w-max h-auto'>
                    <Link className='text-blue-500' href='/'> Xem thêm</Link>
                  </div>
                </div>
                <div className='flex  h-auto w-auto sm:max-h-min '>
                  <img className='w-7 h-7' src="https://sb.tinhte.vn/2021/12/5781122_9.png" alt="" />
                  <img className='w-7 h-7' src="https://sb.tinhte.vn/2021/12/5781122_9.png" alt="" />
                  <img className='w-7 h-7' src="https://sb.tinhte.vn/2021/12/5781122_9.png" alt="" />
                  <img className='w-7 h-7' src="https://sb.tinhte.vn/2021/12/5781122_9.png" alt="" />
                </div>
              </div>
              <div className='flex max-h-max flex-col p-3 shadow-md rounded-lg border mb-5'>
                <div className='flex flex-row justify-between'>
                  <div className='max-w-max font-medium mb-2 md:truncate sm:truncate'>Cộng đồng tham gia</div>

                </div>
                <div className='flex flex-col gap-3 max-h-max w-auto'>
                  <div className='flex justify-start h-auto gap-2'>
                    <div className='w-20'>
                      <img className='h-10 w-20 rounded-lg' src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/10/4454624_og.png" alt="" />
                    </div>
                    <div className="flex items-center font-semibold justify-center">
                      <p>Android</p>
                    </div>
                  </div>
                  <div className='flex justify-start h-auto gap-2'>
                    <div className='w-20'>
                      <img className='h-10 w-20 rounded-lg' src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/10/4454564_og.jpg" alt="" />
                    </div>
                    <div className="flex items-center font-semibold justify-center">
                      <p>macOS</p>
                    </div>
                  </div>
                  <div className='flex justify-start h-auto gap-2'>
                    <div className='w-20'>
                      <img className='h-10 w-20 rounded-lg' src="https://s3.cloud.cmctelecom.vn/tinhte2/2019/03/4582332_og.jpg" alt="" />
                    </div>
                    <div className="flex items-center font-semibold justify-center">
                      <p>Xiaomi</p>
                    </div>
                  </div>
                  <div className='flex justify-start h-auto gap-2'>
                    <div className='w-20'>
                      <img className='h-10 w-20 rounded-lg' src="https://sb.tinhte.vn/2021/04/5427685_og.jpg" alt="" />
                    </div>
                    <div className="flex items-center font-semibold justify-center">
                      <p>Redmi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex h-24 flex-col shadow-md rounded-lg '>
                <img src="https://trendmicro.ctydtp.vn/pictures/tin_tuc/2017/thang9/trung-thu-mini-game.jpg"
                  className='h-full w-full rounded-lg ' alt="" />
              </div>
            </div>
            {/* col right */}
            <div className='w-3/4 '>
              <div className='flex flex-col p-3 shadow-md rounded-lg border mb-5'>
                <div className='flex flex-row  justify-between'>
                  <div className='max-w-max font-medium text-lg mb-2'>Fact đã tạo</div>
                  <div className='max-w-max '>
                    <Link className='text-blue-500' href='#'> Xem tất cả</Link>
                  </div>
                </div>

                <div className='flex flex-row overflow-x-scroll max-w-full'>
                  {
                    tempDataReel.map((item, index) => {
                      return (
                        <Link href="/thread/1">
                          <ReelItem key={index} imgURL={item.imgURL} />
                        </Link>
                      )
                    }
                    )
                  }
                </div>
              </div>
              <div className='flex flex-col p-3 shadow-md rounded-lg border mb-5'>
                <div className='flex flex-row  justify-between'>
                  <div className='max-w-max font-semibold text-lg mb-2'>Bài viết đang ghim</div>
                </div>

                <div className='flex flex-row overflow-x-scroll max-w-full' style={{ height: '280px' }}>
                  {/* <div style={heigh}> */}
                  {
                    tempDataPinnedPosts.map((item, index) => {
                      return (
                        <Link href="/thread/1">
                          <PinnedPosts displayContent={true}
                            postImageURL='https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg'
                            title='Những điều thú vị về chim cánh cụt'
                            author='Ng Minh Hằng'
                            content='Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.'
                          />
                        </Link>
                      )
                    }
                    )
                  }
                  {/* </div> */}
                </div>
              </div>
              <div className='flex flex-col p-3 shadow-md rounded-lg border mb-5'>
                <div className='flex flex-row  justify-between'>
                  <div className='max-w-max font-semibold text-lg mb-2'>Chủ đề bài đã viết</div>
                </div>
                <div className='flex flex-row overflow-x-scroll max-w-full'>
                  {
                    tempDataCatalog.map((item, index) => {
                      return (
                        <Link href="/thread/1">
                          <CatalogUserItem key={index} title={item.title} />
                        </Link>
                      )
                    }
                    )
                  }
                </div>
              </div>
              <div>
                <h1>Post</h1>
              </div>
            </div>
          </div>
          {/* end information user */}
        </div>
      </div>
    )
}