import {splitProps, type JSX} from "solid-js"
import { clsx } from "clsx";
import { Dynamic } from "solid-js/web";

type BoldValue = "extralight" | "light" | "normal" | "medium" | "bold";
type Size = "xs" | "sm" | "base" | "lg"
type Component = "p" | "span"

interface ParagraphProps extends JSX.HTMLAttributes<HTMLParagraphElement>{
    children: JSX.Element,
    boldValue?: BoldValue,
    fontSize?: Size,
    component?: Component,
} 

const globalClasses = "font-main text-light"

const boldValueClasses: Record<BoldValue, string> = {
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
}

const fontSizeClasses: Record<Size, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg", 
}

function getBoldClasses(props: BoldValue|undefined){
    return boldValueClasses[props ?? "normal"]
}

function getFontSizeClasses(props: Size|undefined){
    return fontSizeClasses[props ?? "base"]
}

export default function Paragraph(props:ParagraphProps){

    const [local, rest] = splitProps(props, ["boldValue", "fontSize", "component"]);
    const component = local.component ?? "p";

    return(
        <Dynamic {...rest} component={component} class={clsx([getBoldClasses(local.boldValue), getFontSizeClasses(local.fontSize), globalClasses])}>{props.children}</Dynamic>
    )
}