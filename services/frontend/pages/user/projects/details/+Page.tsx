import Button from "../../../../components/Button";
import Heading from "../../../../components/Heading";
import Paragraph from "../../../../components/Paragraph";
import ProjetSubnav from "../../../../components/ProjetSubNav";
import Vignette from "../../../../components/Vignette";


export default function ProjectDetails() {

    return (
        <>
            <div>
                <div class="flex flex-col items-center gap-3">
                    <Heading level={2} component="h2">Nom du projet</Heading>
                    <ProjetSubnav />
                    <div class="flex flex-row gap-5">
                        <Vignette href="">En attente</Vignette>
                        <Vignette href="">Temps passé</Vignette>
                    </div>
                </div>
                <div>
                    <Paragraph>Description : </Paragraph>
                    <Paragraph>Date de début : </Paragraph>
                </div>
                <div class="flex flex-col gap-2">
                    <Heading component="h3" level={3}>Tâches en attente</Heading>

                    <Button type="secondary">Créer une nouvelle tâche</Button>
                </div>
            </div>
        </>
    )
}