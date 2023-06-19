import { url } from "inspector";


export default function CatalogUserItem(props: any) {
    const { title } = props

    return (
        <button className="mr-2 mb-2 w-auto">
            <div className="flex justify-between items-start py-1 rounded-2xl bg-slate-300">
                {/* <h3 className='mx-3 my-1 w-auto h-9'>{title}</h3> */}
                <span className="mx-3 w-auto whitespace-nowrap">{title}</span>
            </div>
        </button>
       
    )
}