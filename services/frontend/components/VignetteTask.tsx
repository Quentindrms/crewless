import clsx from "clsx";
import Heading from "./Heading";
import { CheckCircleOutline } from "./icons/CheckCircle";
import Delete from "./icons/Delete";
import Edit from "./icons/Edit";
import Paragraph from "./Paragraph";

interface VignetteTaskProps {
  title: string;
  description: string;
  time: string;
}

const globalClasses =
  "w-xs border border-secondary rounded-xl flex items-center gap-2 p-2";
const desktopClasses = "lg:w-lg";

export default function VignetteTask(props: VignetteTaskProps) {
  return (
    <div class={clsx([globalClasses, desktopClasses])}>
      <div class="w-xs flex flex-col gap-2">
        <Heading component="h3" level={3} bold="bold">
          {props.title}
        </Heading>
        <Paragraph>{props.description}</Paragraph>
        <Paragraph boldValue="bold">Temps estimé : {props.time}</Paragraph>
      </div>
      <div class="flex gap-2">
        <CheckCircleOutline />
        <Edit />
        <Delete />
      </div>
    </div>
  );
}
