import type {JSX} from "solid-js"
import Header from "../../components/Header"

export default function AuthLayout(props: {children:JSX.Element}) {

    return (
        <>  
        <Header />
        {props.children};
        </>
    )
}