import { createSignal, For, Show } from "solid-js"
import NavigationLink from "./NavigationLink"
import Heading from "./Heading"
import BurgerIcon from "./icons/Burger"
import MobileNavigationLink from "./navigation/MobileNavigationLink"

type NavigationLink = {
    title: string,
    target: string,
}

const links: NavigationLink[] = [{
    title: "Lien 1",
    target: "#"
}, {
    title: "Lien2",
    target: "#"
}, {
    title: "Lien 3",
    target: "",
}]

const [isOpen, setIsOpen] = createSignal(false);

function interractWithBurger() {
    setIsOpen(!isOpen());
}

export default function Header() {

    return (
        <>
            <div class="hidden lg:flex lg:flex-row lg:items-center justify-between">
                <Heading level={1} component="h1">Crewless</Heading>
                <div class="flex gap-5">
                    <For each={links}>
                        {(link) => (
                            <NavigationLink target={link.target}>{link.title}</NavigationLink>
                        )}
                    </For>
                </div>
            </div>
            <div class="lg:hidden">
                <div class="flex justify-between items-center p-3 ">
                    <Heading level={1} component="h1">Crewless</Heading>
                    <BurgerIcon onClick={interractWithBurger} />
                </div>
                <div class="flex flex-col gap-2">
                    <Show when={isOpen()}>
                        <For each={links}>
                            {(link) => (
                                <MobileNavigationLink target={link.target}>{link.title}</MobileNavigationLink>
                            )}
                        </For>
                    </Show>
                </div>
            </div>
        </>
    )
}