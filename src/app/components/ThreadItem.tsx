import styles from '../home.module.scss';
function ThreadItem() {
    return (
        <div className='flex flex-row mt-4'>
            <img className='rounded-xl w-[240px] mr-4 object-cover' src='https://imgproxy7.tinhte.vn/xacq4TZLarFBzsyx4f37F1MIUK4k6nTHPTUuQqE87Z0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446077_tinhte-cover-sac.jpg' />
            <div >
                <h3 className={styles['post_title']}>Mua thử 2 cục sạc Retro 35W và 67W ở Việt Nam - Thiết kế hoài cổ, nhỏ gọn - giá còn hơi cao</h3>
                <p className={`${styles['post_content']} h-[60px] mt-1`}>
                    Video Unbox và thiết kế của Shargeek 35W & 67W
                    Thiết kế - điểm đặc biệt trên cả 2 mẫu sạc Retro
                    Cách đóng gói của cả 2 chiếc sạc đem đến ngay sự hoài cổ, cục sạc 35W Retro với hình ảnh của chiếc Apple Macintosh đời đầu…
                </p>
                <div className='flex flex-row justify-start items-center mt-1'>
                    <div className='rounded-full w-8 h-8 bg-gray-400 mr-2'></div>
                    <span className={`${styles['author']}`} style={{ color: 'black' }}>Lab Review</span>
                </div>
            </div>
        </div>
    )
}

export default ThreadItem;