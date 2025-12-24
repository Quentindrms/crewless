import {splitProps, type JSX} from "solid-js"
import { Dynamic } from "solid-js/web";
import { clsx } from "clsx";

type HeadingLevel = 1|2|3|4|5|6;
type BoldValue = "light" | "regular" | "bold" | "extra-bold";

interface HeadingProps extends JSX.HTMLAttributes<HTMLHeadingElement>{
    component?: `h${HeadingLevel}`
    children: JSX.Element
    level?: HeadingLevel,
    bold?: BoldValue,
}

const globalClasses = "font-title text-light"

const levelClasses: Record<HeadingLevel, string> = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl: mdtext-2xl',
    6: 'text-lg: mdtext-xl',
}

const boldClasses: Record<BoldValue, string>={
    "light": "font-light",
    "regular": "font-regular",
    "bold": "font-bold",
    "extra-bold": "font-extrabold", 
}

function getLevelClasses(props: HeadingLevel|undefined){
    return levelClasses[props ?? 1]
}

function getBoldClasses(props: BoldValue|undefined){
    return boldClasses[props ?? "regular"]; 
}

export default function Heading(props: HeadingProps){
    
    const [local, rest] = splitProps(props, ["level", "bold", "component"])
    const component = local.component || `h${local.level ?? 1}`

    return(
        <Dynamic {...rest} component={component} class={clsx([getLevelClasses(local.level), getBoldClasses(local.bold), globalClasses, rest.class])}>{props.children}</Dynamic>
    )

}