import { PropsWithChildren } from "react"
import '../home.module.css';

type TagItemProps= {
    selected? : boolean,
}
export default function TagItem(props: PropsWithChildren<TagItemProps>) {
    const selected=props.selected??false;
    const title =props.children??"";
    return (
        <span className={"tag-item "+ selected?"tag-selected":""}>
            {title}
        </span>
    )
}