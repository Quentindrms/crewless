import { For } from "solid-js";
import VignetteSubNav from "./VignetteSubNav";

const labels = [
  "Idées",
  "En cours",
  "Planifié",
  "En pause",
  "Terminé",
  "Abandonné",
];

export default function ProjetFilter() {
  return (
    <div class="grid grid-cols-3 grid-rows-2 w-xs lg:w-lg items-center justify-items-center gap-2">
      <For each={labels}>
        {(label) => <VignetteSubNav target="#">{label}</VignetteSubNav>}
      </For>
    </div>
  );
}
