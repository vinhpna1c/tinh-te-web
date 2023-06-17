import { background } from "@chakra-ui/react"

type GradientButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
}
export const backgroundGradientStyle = {
    background: 'linear-gradient(45deg,#0072ff 15%,#00deb0 85%)'
};
export default function GradientButton(props: GradientButtonProps) {
    return (
        <div className=" p-[1px] shadow-sm w-9 h-9 rounded-md">
            <button
                className="w-full h-full rounded-md"
                onClick={props.onClick}
                style={backgroundGradientStyle}>
                {props.children}
            </button>
        </div>
    )
}