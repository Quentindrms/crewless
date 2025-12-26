import type { JSX } from "solid-js";

interface NavigationLinksProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
  target: string;
}

export default function NavigationLink(props: NavigationLinksProps) {
  return (
    <>
      <a
        href={props.target}
        class=" font-title font-bold text-light text-3xl hover:text-primary-dark"
      >
        {props.children}
      </a>
    </>
  );
}
