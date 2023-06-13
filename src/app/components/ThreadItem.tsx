
import styles from '../home.module.scss';
function ThreadItem(props: any) {
    const {imgURL, title, content, author} = props

    return (
        <div className='flex justify-start mt-4'>
            <div className='w-[240px] mr-4 max-h-40 flex-shrink-0'>
            <img className='rounded-xl object-contain w-full overflow-hidden' src={imgURL} />
            </div>
           
            <div >
                <h3 className={styles['post_title']}>{title}</h3>
                <p className={`${styles['post_content']} h-[60px] mt-1`}>
                    {content}
                </p>
                <div className='flex flex-row justify-start items-center mt-1'>
                    <div className='rounded-full w-8 h-8 bg-gray-400 mr-2'></div>
                    <span className={`${styles['author']}`} style={{ color: 'black' }}>{author}</span>
                </div>
            </div>
        </div>
    )
}

export default ThreadItem;