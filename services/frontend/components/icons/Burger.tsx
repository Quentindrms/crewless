import { IoMenuSharp } from 'solid-icons/io'

interface BurgerIconProps {
    onClick?: ()=>void,
}

export default function BurgerIcon(props:BurgerIconProps) {

    return (
        <>
    <IoMenuSharp onClick={props.onClick} color="var(--color-light)" size={85}></IoMenuSharp>
        </>
    )
}