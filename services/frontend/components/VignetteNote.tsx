import type { JSX } from "solid-js";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { CheckCircleOutline } from "./icons/CheckCircle";
import Edit from "./icons/Edit";
import Delete from "./icons/Delete";
import clsx from "clsx";

interface VignetteNoteProps {
  title: string;
  description: string;
  date: string;
  done: boolean;
}

const globalClasses =
  "flex flex-col gap-2 border border-secondary w-xs p-3 rounded-xl m-h-25";

export default function VignetteNote(props: VignetteNoteProps) {
  return (
    <div class={clsx([globalClasses])}>
      <Heading component="h3" level={3} bold="bold">
        {props.title}
      </Heading>
      <Paragraph class="min-h-15 max-h-25 overflow-scroll">
        {props.description}
      </Paragraph>
    </div>
  );
}
