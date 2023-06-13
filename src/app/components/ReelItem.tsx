import { url } from "inspector";

export default function ReelItem(props: any) {
    const { imgURL } = props

    return (
        <button className="mr-2 mb-2">
            <div className="flex flex-col justify-between items-start py-1 rounded-2xl"
                style={{
                    width: 108,
                    height: 180,
                    paddingLeft: 8,
                    paddingRight: 8,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    whiteSpace: 'nowrap',
                    backgroundImage: `url(${imgURL})`
                }}>
                <div className="rounded-full w-[32px] h-[32px] bg-white"></div>
                <span className="text-ellipsis overflow-clip text-white w-full block" >Posted user long</span>
            </div>
        </button>
    )
}