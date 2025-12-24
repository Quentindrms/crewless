import clsx from "clsx";
import type { JSX } from "solid-js";

interface VignetteSubNavProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
  target: string,
}

const globalClasses =
  "cursor-pointer p-3 w-25 lg:w-35 h-fit text-center font-medium text-md text-light bg-primary-light rounded-xl hover:bg-primary-dark";

export default function VignetteSubNav(props: VignetteSubNavProps) {
  return <a class={clsx([globalClasses])}>{props.children}</a>;
}
