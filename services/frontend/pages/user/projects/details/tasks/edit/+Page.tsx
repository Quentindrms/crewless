import { createSignal } from "solid-js";
import Heading from "../../../../../../components/Heading";
import { TasksType } from "../../../../../../types/Tasks";
import FormInput from "../../../../../../components/forms/FormInput";
import FormTextArea from "../../../../../../components/forms/FormTextArea";
import FormSubmit from "../../../../../../components/forms/FormSubmit";

export default function EditTask() {

    const [formData, setFormData] = createSignal<TasksType>({
        name: '',
        description: '',
        estimedTime: 0,
        isCompleted: false,
    })

    const handleInputChange = (field: keyof TasksType) => (e:Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }))
    }

    function handleSubmit(e:Event){
        e.preventDefault();
    }

    return (
        <>
            <Heading level={2} component="h2">Édition d'une tâche</Heading>
            <form class="flex flex-col items-center gap-2" onSubmit={(e:Event) => handleSubmit(e)}>
                <FormInput inputType="text" onChange={handleInputChange('name')}>Nom</FormInput>
                <FormTextArea onChange={handleInputChange('description')} rows={15}>Description</FormTextArea>
                <FormInput inputType="number" onChange={handleInputChange('estimedTime')}>Temps estimé</FormInput>
                <FormSubmit value="Créer une tâche"></FormSubmit>
            </form>
        </>
    )


}