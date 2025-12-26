import clsx from "clsx";
import type { JSX } from "solid-js";
import Heading from "../Heading";

interface NavigationLinkProps {
  children: JSX.Element;
  target: string;
}

const globalClasses =
  "font-title text-bold text-light text-4xl text-center hover:text-primary-light";

export default function NavigationLink(props: NavigationLinkProps) {
  return (
    <a href={props.target} class={clsx([globalClasses])}>
      {props.children}
    </a>
  );
}
