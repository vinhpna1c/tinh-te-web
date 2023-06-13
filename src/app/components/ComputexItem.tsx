import styles from '../home.module.scss';
function ComputexItem(props: any) {
    const {imgURL, title} = props

    return (
        <div className={`w-[168px] h-[275px] mr-3`}
            style={{
                flexGrow: 0,
                flexShrink: 0,
                background: 'linear-gradient(transparent, black)',

            }}>
            <div className={`rounded-xl w-full h-full px-3 pb-12 flex flex-col justify-end ${styles['computex_item']} `} style={{
                backgroundPosition: 'center center',
                backgroundImage: `url(${imgURL})`
            }}>
                <span className={styles['thread_title']}        >
                    {title}
                </span>
            </div>

        </div>
    )
}

export default ComputexItem;