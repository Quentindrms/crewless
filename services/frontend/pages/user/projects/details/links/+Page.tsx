import Button from "../../../../../components/Button";
import Heading from "../../../../../components/Heading";
import ProjetSubnav from "../../../../../components/ProjetSubNav";
import VignetteLien from "../../../../../components/VignetteLien";

export default function ProjectLinks() {

    return (
        <>
            <div class="flex flex-col items-center gap-3">
                <Heading level={2} component="h2">Nom du projet</Heading>
                <ProjetSubnav />
            </div>

            <div class="">
                    <VignetteLien title="Lien" description="Un lien" target="http://google.com"/>
                <div class="flex justify-center">
                    <Button type="secondary" bold="bold">Nouveau lien</Button>
                </div>
            </div>
        </>
    )
}