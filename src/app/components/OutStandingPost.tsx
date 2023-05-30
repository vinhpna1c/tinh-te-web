import styles from '../home.module.scss';
function OutStandingPost() {
    return (
        <div className='flex flex-row pt-4 px-3'>
            
            <span className={`${styles['ranking']} w-16`}>#1</span>    
                       
            <div className='flex flex-col'>
                <h1 className={`${styles['ranking_title']}`}>Điện thoại không xài ốp lưng chính là biểu tượng mới nhất của người giàu</h1>
                <span className={`${styles['author']}`}>Rubi Lee</span>
            </div>
        </div>
    );
}

export default OutStandingPost;