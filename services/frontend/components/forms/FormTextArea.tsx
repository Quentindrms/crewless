import type {JSX} from "solid-js";

interface FormTextAreaProps {
    children: JSX.Element,
    onChange: (e:Event)=>void,
    rows?: number,
    cols?: number,
}

export default function FormTextArea(props:FormTextAreaProps) {


    return (
        <>
        <label class="font-title text-light text-2xl">{props.children}</label>
        <textarea rows={props.rows ?? 5} cols={props.cols ?? 5} class="bg-background-light font-main text-dark w-2xs lg:w-xs" onChange={props.onChange}>Saisissez votre texte ici</textarea>
        </>
    )
}