import clsx from "clsx";
import type { JSX } from "solid-js";

interface MobileNavigationLinkProps {
  children: JSX.Element;
  target: string;
}

const globalClasses = "text-5xl text-center text-light font-title";

export default function MobileNavigationLink(props: MobileNavigationLinkProps) {
  return (
    <>
      <a href={props.target} class={clsx([globalClasses])}>
        {props.children}
      </a>
    </>
  );
}
