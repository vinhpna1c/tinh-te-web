import styles from '../home.module.scss';
function ComputexItem() {
    return (
        <div className={`w-[168px] h-[275px] mr-3`}
            style={{
                flexGrow: 0,
                flexShrink: 0,
                background: 'linear-gradient(transparent, black)',

            }}>
            <div className={`rounded-xl w-full h-full px-3 pb-12 flex flex-col justify-end ${styles['computex_item']} `} style={{
                backgroundPosition: 'center center',
                backgroundImage: `url('https://imgproxy7.tinhte.vn/m445spS5ZuzWvWGKgC35jjsHerM1-u4AOoKFvnCtl1I/h:320/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6446661_cover-tren-tay-cooler-master-orb-x-computex23-tinhte.jpg')`
            }}>
                <span className={styles['thread_title']}        >
                    Computex 2023: Trên tay Cooler Master ORB X - Trạm công nghệ đa năng
                </span>
            </div>

        </div>
    )
}

export default ComputexItem;