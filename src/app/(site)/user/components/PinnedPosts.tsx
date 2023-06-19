
import styles from '../../../home.module.scss'

function PinnedPostItem(props: {
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
        <div className={"mr-2 mb-5  max-h-[200px]"}>
            <div className='flex flex-col'>
                <div className='flex h-28 w-52 flex-col' >
                    <div>
                        <img className='rounded-t-lg' src={props.postImageURL} alt={props.title} />
                    </div>
                    <div className={`${displayContent && styles['display_content']}`}>
                        <h4 className='font-bold text-base uppercase'>{props.title}</h4>
                        <p className='mb-1 text-blue-700' >{props.author}</p>
                        {displayContent && <p className='truncate rounded-b-lg'>{props.content}</p>}
                    </div>
                </div>

            </div>

        </div>
    )
}
export default PinnedPostItem