
import type {JSX} from "solid-js";
import "./tailwind.css";

export default function Layout(props:{children?: JSX.Element}){
return(
    <>
        {props.children}
    </>
)
}