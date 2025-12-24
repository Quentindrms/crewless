import type { JSX } from "solid-js";
import { clsx } from "clsx";

import Heading from "./Heading";
import Paragraph from "./Paragraph";


interface ProjetProps extends JSX.HTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
    statut: string;
    type: string;
    time: string;
}

const defaultClasses = "w-2xs m-5border border-secondary border rounded-xl text-light flex flex-col gap-2 p-2"
const desktopClasses = "md:w-lg"

export default function Projet(props: ProjetProps) {
    return (
        <div class={clsx([defaultClasses, desktopClasses])} id="projet">
            <div>
                <Heading component="h3" level={3} bold="bold">Nom de la tâche</Heading>
                <Paragraph boldValue="normal" class="text-sm xl:text-base w-fit h-35 text-justify p-5 overflow-scroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum semper eleifend. Ut id nisi at est accumsan pulvinar eu nec tellus. Aenean eget faucibus ante. Suspendisse ultrices nulla id imperdiet porta. Curabitur cursus vitae leo quis elementum. Suspendisse quis malesuada nisi, id pellentesque ligula. Nullam et sollicitudin eros, non rutrum nisi. Vestibulum id sagittis erat, et interdum est. Integer non enim eget elit eleifend commodo in vel ipsum. Duis vitae commodo urna. Nam posuere libero ac turpis pharetra, in accumsan massa tincidunt.
                </Paragraph>
            </div>
            <div class="flex justify-between p-2 items-center">
                <div>
                    <Paragraph boldValue="medium" class="italic">En cours</Paragraph>
                    <Paragraph boldValue="normal" class="text-lg">Idée</Paragraph>
                </div>
                <div>
                    <Paragraph boldValue="bold" id="tempsPassé">
                        {props.time} heures
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}
