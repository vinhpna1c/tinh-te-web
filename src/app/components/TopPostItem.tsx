
import styles from '../home.module.scss';
const mockData =
{
    postImageURL: 'https://photo2.tinhte.vn/data/attachment-files/2023/02/6342203_tinhte_cover_peng_deeptalk.jpg',
    title: 'Những điều thú vị về chim cánh cụt',
    author: 'Ng Minh Hằng',
    content: 'Lúc còn bé, ước mơ của mình là được một lần chạm tay vào cái bụng tròn tròn ú ú của những bạn cánh cụt, và tới nay thì điều đó vẫn chưa thực hiện được. Tuy nhiên, vì sở thích đó nên mình đã gom góp được một số kiến thức thú vị về loài chim “không biết bay” cực kỳ đáng yêu này.',
}
function TopPostItem(props: {
    displayContent?: boolean,
    topContent?: boolean,
}) {
    const displayContent = props.displayContent ?? false;
    const topContent = props.topContent ?? false;
    return (
        <div className={"mr-2 mb-5 max-h-[500px]"}>
            <img className="w-full rounded-lg" src={mockData.postImageURL} alt={mockData.title} />
            <div className={`${displayContent&&styles['display_content']}`}>
                <h4 className={`${styles['post_title']} ${topContent && styles['top_content']} my-2`}>{mockData.title}</h4>
                <p className={`${styles['author_title']} mb-2`}>{mockData.author}</p>
                {displayContent && <p className={styles['post_content']}>{mockData.content}</p>}
            </div>
        </div>
    )
}
export default TopPostItem