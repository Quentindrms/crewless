import { createSignal } from "solid-js";
import FormInput from "../../../../../../components/forms/FormInput";
import Heading from "../../../../../../components/Heading";
import { TaskFormType } from "../../../../../../types/forms/TaskFormType";
import FormTextArea from "../../../../../../components/forms/FormTextArea";
import FormSubmit from "../../../../../../components/forms/FormSubmit";

export default function NewTask() {

    const [formData, setFormData] = createSignal<TaskFormType>({
        name: '',
        estimedTime: 0,
        description: '',
        isCompleted: false,
    })

    const handleChange = (field: keyof TaskFormType) => (e:Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }))
    }

    function handleSubmit(e:Event){
        e.preventDefault()
        console.log(formData())
    }

    return (
        <div class="flex flex-col items-center">
        <Heading component="h2" level={2}>Créer une nouvelle tâche</Heading>
        <form class="flex flex-col items-center" onSubmit={(e:Event) => handleSubmit(e)}>
            <FormInput inputType="text" onChange={handleChange("name")}>Nom de la tâche</FormInput>
            <FormInput inputType="number" onChange={handleChange("estimedTime")}>Temps estimé</FormInput>
            <FormTextArea onChange={handleChange("description")}>Description</FormTextArea>
            <FormSubmit value="Ajouter une tâche"></FormSubmit>
        </form>
        </div>
    )

}