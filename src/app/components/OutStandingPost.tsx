import styles from '../home.module.scss';
function OutStandingPost(props: any) {
    const {rank, title, author} = props

    return (
        <div className='flex flex-row pt-4 px-3'>
            
            <span className={`${styles['ranking']} w-16`}>#{rank}</span>    
                       
            <div className='flex flex-col'>
                <h1 className={`${styles['ranking_title']}`}>{title}</h1>
                <span className={`${styles['author']}`}>{author}</span>
            </div>
        </div>
    );
}

export default OutStandingPost;