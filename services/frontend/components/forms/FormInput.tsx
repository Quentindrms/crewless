import type { JSX } from "solid-js";

type FormInputType = "text" | "email" | "phone" | "password" | "number" | "date" | "time";

interface FormInputProps {
    children: JSX.Element,
    inputType?: FormInputType
    placeholder?: string,
    id?: number,
    name?: string,
}

export default function FormInput(props:FormInputProps) {

    return (
        <div class="flex flex-col">
            <label class="font-title text-light text-3xl" for={`-${props.name}-${props.id?.toString()}`}>{props.children}</label>
            <input type={props.inputType ?? "text"} id={`-${props.name}-${props.id?.toString()}`}placeholder="Test" class="bg-background-light font-main text-dark w-2xs lg:w-xs"></input>
        </div>
    )
}