import clsx from "clsx";
import { splitProps, type JSX } from "solid-js";

type ButtonType = "primary" | "secondary" | "delete";
type BoldValue = "base" | "medium" | "bold";

interface ButtonProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
  type?: ButtonType;
  bold?: BoldValue;
}

const globalClasses =
  "cursor-pointer font-main text-light text-center align-center p-5 w-fit rounded-xl";

const buttonClasses: Record<ButtonType, string> = {
  primary: "bg-primary-light hover:bg-primary-dark",
  secondary: "bg-accent-light hover:bg-accent-dark",
  delete: "bg-secondary hover:bg-secondary-dark",
};

const boldClasses: Record<BoldValue, string> = {
  base: "font-base",
  medium: "font-medium",
  bold: "font-bold",
};

function getButtonClasses(props: ButtonType | undefined) {
  return buttonClasses[props ?? "primary"];
}

function getBoldClasses(props: BoldValue | undefined) {
  return boldClasses[props ?? "base"];
}

export default function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["type", "bold"]);

  return (
    <a
      {...rest}
      class={clsx([
        globalClasses,
        getButtonClasses(local.type),
        getBoldClasses(local.bold),
      ])}
    >
      {props.children}
    </a>
  );
}
