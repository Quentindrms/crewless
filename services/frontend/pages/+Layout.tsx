
import type {JSX} from "solid-js";
import "./tailwind.css";

export default function Layout(props:{children?: JSX.Element}){
return(
    <div class="flex flex-col h-screen grow bg-background-dark">
        {props.children}
    </div>
)
}