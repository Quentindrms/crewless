import clsx from "clsx";
import type { JSX } from "solid-js";

interface VignetteProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
  target: string,
}

const globalClasses =
  "cursor-pointer p-3 w-fit h-fit text-center font-medium text-md text-light bg-primary-light rounded-xl hover:bg-primary-dark";

export default function Vignette(props: VignetteProps) {
  return <a class={clsx([globalClasses])}>{props.children}</a>;
}
