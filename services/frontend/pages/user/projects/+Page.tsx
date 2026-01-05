import Heading from "../../../components/Heading"
import Vignette from "../../../components/Vignette"
import "../../tailwind.css"

export default function Projects() {

    return (
        <div class="flex flex-col items-center pt-3">
            
            <div class="grid grid-cols-2 grid-rows-2 gap-2 w-md">
                <Vignette href="">En cours</Vignette>
                <Vignette href="">Terminé</Vignette>
                <Vignette href="">En attente</Vignette>
            </div>

            <Heading component="h3" level={3}>Projets récents</Heading>
            <div>

            </div>
            <Heading component="h3" level={3}>Projets délaissés</Heading>
            <div>

            </div>
            <Heading component="h3" level={3}>Tâches en attente</Heading>
            <div>

                
            </div>
        </div>
    )
}