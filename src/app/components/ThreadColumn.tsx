
import styles from '../home.module.scss';
export default function ThreadColumn() {
    return (
        <div className='rounded-xl mr-3' style={{ backgroundColor: '#f2f4f7' }}>
            <div className="flex flex-row items-end justify-end rounded-xl w-full h-[250px] px-4 py-2" style={{
                backgroundImage: `url("https://photo2.tinhte.vn/data/attachment-files/2023/05/6443243_cover-dang-kiem-xe.jpg" )`,
                // backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} >
                
                <span className=''>
                    <img className='w-[40px] h-auto' src='./images/xe_tinhte_logo_small.png'/>
                </span>

            </div>
            <div className='p-4'>
            <div className='h-0 relative left-4 top-[-30px]'>
                    <span className="rounded-full py-2 px-4 bg-red-600 text-white">Xe Tinhte</span>
                </div>
                <h3 className={styles['column_item'] + ' '+styles['top_item'] }>Dự kiến tự động gia hạn kiểm định xe hơi cá nhân từ ngày 1/6</h3>
                <h3 className={styles['column_item']}>Mercedes E-Class L 2024 - phiên bản "S-Class giá rẻ" dành riêng cho thị trường Trung Quốc</h3>
                <h3 className={styles['column_item']}>Chiếc ô tô điện Wuling HongGuang MiniEV đầu tiên đã xuất xưởng, đặt hàng từ Q2/2023</h3>
                <h3 className={styles['column_item']}> Chia sẻ: chạy xe nhanh dưới trời mưa mới thấy giá trị của Kiểm soát lực kéo</h3>
                <button className='rounded-sm bg-gray-400 w-full px-4 py-2 text-sm font-normal'>Xem tất cả</button>
            </div>
        </div>
    )
}