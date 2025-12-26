import CreateIcon from "./icons/Create";

interface BottomButtonProps {
  onClick?: ()=>void,
}

export default function BottomButton(props:BottomButtonProps) {

    return (
        <>
            <CreateIcon onClick={props.onClick} />
        </>
    )
}