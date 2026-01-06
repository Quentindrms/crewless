import Heading from "../../../../../components/Heading";
import ProjetSubnav from "../../../../../components/ProjetSubNav";
import VignetteSubNav from "../../../../../components/VignetteSubNav";

export default function ProjectNotes() {

    return (
        <>
            <div class="flex flex-col items-center">
                <Heading component="h2" level={2}>Nom du projet</Heading>
                <ProjetSubnav />
            </div>
        </>
    )
}