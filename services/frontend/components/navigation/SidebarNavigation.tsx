import { For } from "solid-js"
import NavigationLink from "./NavigationLink"

type NavigationLink = {
    title: string,
    target: string,
}

const links: NavigationLink[] = [{
    title: "Lien 1",
    target: "#"
},{
    title: "Lien2",
    target: "#"
},{
    title: "Lien 3",
    target: "",
}]

export default function SidebarNavigation() {

    return (
        <div class="flex flex-col gap-2">
        <For each={links}>
            {(link) => (
                <NavigationLink target={link.target}>{link.title}</NavigationLink>
            )}
        </For>
        </div>
    )
}