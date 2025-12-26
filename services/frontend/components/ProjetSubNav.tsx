import { For } from "solid-js";
import VignetteSubNav from "./VignetteSubNav";

type SubNavItems = {
  value: string;
  name: string;
  target: string;
};

const NavItems: SubNavItems[] = [
  {
    value: "item",
    name: "Notes",
    target: "#",
  },
  {
    value: "item",
    name: "Liens",
    target: "#",
  },
  {
    value: "item",
    name: "Historique",
    target: "#",
  },
  {
    value: "item",
    name: "Éditer",
    target: "#",
  },
];

export default function ProjetSubnav() {
  return (
    <div class="grid grid-cols-3 grid-rows-2 w-xs gap-2 items-center justify-items-center lg:w-lg">
      <For each={NavItems}>
        {(item, index) =>
          index() == NavItems.length - 1 ? (
            <VignetteSubNav class="col-start-2 col-end-3" target={item.target}>
              {item.name}
            </VignetteSubNav>
          ) : (
            <VignetteSubNav target={item.target}>{item.name}</VignetteSubNav>
          )
        }
      </For>
    </div>
  );
}
