import Link from "next/link";
import { PropsWithChildren } from "react"


type TagItemProps = {
    selected?: boolean,
}
export default function TagItem(props: PropsWithChildren<TagItemProps>) {
    const selected = props.selected ?? false;
    const title = props.children ?? "";
    return (

        <span className={"tag-item " + (selected ? "tag-selected" : "")}>
            <Link href={"/tags/ios"}>{title}</Link>

        </span>

    )
}