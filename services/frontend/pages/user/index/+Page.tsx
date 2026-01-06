import Heading from "../../../components/Heading";
import Vignette from "../../../components/Vignette";

export default function ProjectsIndex(){

    return(
        <div class="flex flex-col items-center">
            <Heading component="h2" level={2}>Index des projets</Heading>
            <div class="grid grid-cols-2 grid-rows-2 w-md gap-2">
                <Vignette href="">En cours </Vignette>
                <Vignette href="">Terminé</Vignette>
                <Vignette href="">En attente</Vignette>
                <Vignette href="">Temps passé</Vignette>
            </div>

            <div>
                <Heading component="h3" level={3}>Projets récents</Heading>
            </div>

            <div>
                <Heading component="h3" level={3}>Projets délaissés</Heading>
            </div>

            <div>
                <Heading component="h3" level={3}>Tâches en attente</Heading>
            </div>
        </div>
    )
}