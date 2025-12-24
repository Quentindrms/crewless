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
                <Heading component="h3" level={3} bold="bold">{props.name}</Heading>
                <Paragraph boldValue="normal" class="w-fit max-h-35 text-justify p-5 overflow-scroll">{props.description}</Paragraph>
            </div>
            <div class="flex justify-between p-2 items-center">
                <div>
                    <Paragraph boldValue="medium" class="italic">{props.statut}</Paragraph>
                    <Paragraph boldValue="normal" class="text-lg">{props.type}</Paragraph>
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
