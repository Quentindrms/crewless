import clsx from "clsx";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface VignetteLiensProps {
  title: string;
  target: string;
  description: string;
}

const globalClasses =
  "flex flex-col gap-2 w-xs border border-secondary rounded-xl p-2";
const desktopClasses = "lg:w-lg";

export default function VignetteLien(props: VignetteLiensProps) {
  return (
    <>
      <div class={clsx([globalClasses, desktopClasses])}>
        <Heading component="h3" level={3} bold="bold">
          {props.title}
        </Heading>
        <Paragraph>{props.description}</Paragraph>
        <Paragraph class="">
          <a href="" class="text-primary-light hover:text-primary-dark text-lg">
            {props.target}
          </a>
        </Paragraph>
      </div>
    </>
  );
}
