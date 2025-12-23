import clsx from "clsx"
import {splitProps, type JSX} from "solid-js"

interface VignetteProps extends JSX.HTMLAttributes<HTMLDivElement>{
    children: JSX.Element,
    href: string,
}

const globalClasses = "w-small h-small p-2 bg-primary-light flex flex-col justify-around text-light font-main font-medium text-small text-center rounded-xl"

export default function Vignette(props:VignetteProps){
    return(
        <div class={clsx([globalClasses])}>{props.children} {Counter()} </div>
    )
}

function Counter(){
    return(
        <div class="text-extralarge">0</div>
    )
}