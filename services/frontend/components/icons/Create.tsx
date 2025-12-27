import { FaSolidCirclePlus } from "solid-icons/fa";

interface CreateIconProps {
  onClick?: () => void;
}

export default function CreateIcon(props: CreateIconProps) {
  return (
    <FaSolidCirclePlus
      onClick={props.onClick}
      size={70}
      color="var(--color-accent-light"
    />
  );
}
