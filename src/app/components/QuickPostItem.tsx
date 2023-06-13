import styles from '../home.module.scss';

function QuickPostItem(props: any) {
    const {title, imgURL} = props

    return (
        <div className="grid grid-cols-2 mb-4">
            <h3 className="col text-sm font-bold">{title}</h3>
            <div className="col flex flex-row justify-end">
                <img className="w-[120px] h-[60px] object-cover rounded" alt={title} src={imgURL} />
            </div>

        </div>
    )
}

export default QuickPostItem;