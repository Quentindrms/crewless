import type { JSX } from "solid-js";

interface FormSubmitProps {
  value: string;
}

export default function FormSubmit(props: FormSubmitProps) {
  return (
    <>
      <input
        class="bg-accent-light rounded-xl w-fit p-3 text-light text-title font-bold hover:bg-accent-dark"
        type="submit"
        value={props.value}
      ></input>
    </>
  );
}
