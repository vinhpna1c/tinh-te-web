
import styles from '../home.module.scss';

function TopPostItem(props: {
    displayContent?: boolean,
    topContent?: boolean,
    postImageURL: string,
    title: string,
    author: string,
    content: string
}) {
    const displayContent = props.displayContent ?? false;
    const topContent = props.topContent ?? false;
    return (
        <div className={"mr-2 mb-5 max-h-[500px]"}>
            <img className="w-full rounded-lg" src={props.postImageURL} alt={props.title} />
            <div className={`${displayContent&&styles['display_content']}`}>
                <h4 className={`${styles['post_title']} ${topContent && styles['top_content']} my-2`}>{props.title}</h4>
                <p className={`${styles['author']} mb-2`}>{props.author}</p>
                {displayContent && <p className={styles['post_content']}>{props.content}</p>}
            </div>
        </div>
    )
}
export default TopPostItem