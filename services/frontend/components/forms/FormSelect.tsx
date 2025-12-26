import {For, type JSX} from "solid-js";

type OptionType = {
    name: string,
    value: string,
}

interface FormSelectProps {
    children: JSX.Element,
    name: string, 
    options: OptionType[],
}

export default function FormSelect(props:FormSelectProps){


    return(
        <>
        <label class="font-title text-light text-3xl">{props.children}</label>
            <select class="bg-light font-title w-2xs lg:w-xs">
                <option value="">Choisir une option</option>
                <For each={props.options}>
                    {(option) => (
                        <option value={option.value}>{option.name}</option>
                    )}
                </For>
            </select>
        </>
    )
}