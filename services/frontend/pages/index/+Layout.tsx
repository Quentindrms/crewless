import type {JSX} from "solid-js"
import Header from "../../components/Header"

export default function LandingPageLayout(props: {children:JSX.Element}) {

    return (
        <>  
        <Header />
        {props.children};
        </>
    )
}