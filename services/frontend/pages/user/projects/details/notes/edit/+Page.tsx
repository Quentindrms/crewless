import { createSignal } from "solid-js"
import { NotesType } from "../../../../../../types/Notes"
import FormInput from "../../../../../../components/forms/FormInput";
import FormTextArea from "../../../../../../components/forms/FormTextArea";
import FormSubmit from "../../../../../../components/forms/FormSubmit";
import Heading from "../../../../../../components/Heading";

export default function CreateNote() {

    const [formData, setFormData] = createSignal<NotesType>({
        title: '',
        description: '',
    })

    const handleInputChange = (field: keyof NotesType) => (e:Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }))
        console.log(formData());
    }

    function handleSubmit(e:Event){
        e.preventDefault();
    }

    return (
        <div class="flex flex-col items-center gap-2">
            <Heading level={2} component="h2">Éditer une note</Heading>
            <form class="flex flex-col items-center gap-2" onSubmit={(e:Event) => handleSubmit(e)}>
                <FormInput inputType="text" onChange={handleInputChange("title")}>Nom</FormInput>
                <FormTextArea onChange={handleInputChange("description")}>Description</FormTextArea>
                <FormSubmit value="Créer"></FormSubmit>
            </form>
        </div>
    )
}