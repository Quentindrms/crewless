import { createSignal } from "solid-js"
import { TaskFormType } from "../../../../../../types/forms/TaskFormType"
import { LinksType } from "../../../../../../types/Links"
import Heading from "../../../../../../components/Heading"
import FormInput from "../../../../../../components/forms/FormInput"

export default function EditTask() {

    const [formData, setFormData] = createSignal<LinksType>({
        name: '',
        link: '',
    })

    const handleInputChange = (field: keyof LinksType) => (e:Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]:target.value
        }))
    }

    function handleSubmit(e:Event){
        e.preventDefault();
    }

    return (

        <div class="flex flex-col items-center">
            <Heading level={2} component="h2">Éditer un lien</Heading>

            <form class="" onSubmit={(e:Event) => handleSubmit(e)}>
                <FormInput inputType="text" onChange={handleInputChange("name")}>Nom</FormInput>
                <FormInput inputType="text" onChange={handleInputChange("link")}>Lien</FormInput>
            </form>
        </div>
    )


}