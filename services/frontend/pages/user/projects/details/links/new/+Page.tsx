import { createSignal } from "solid-js"
import { LinksType } from "../../../../../../types/Links"
import FormInput from "../../../../../../components/forms/FormInput";
import FormSubmit from "../../../../../../components/forms/FormSubmit";
import Heading from "../../../../../../components/Heading";

export default function CreateLink() {

    const [formData, setFormData] = createSignal<LinksType>({
        name: '',
        link: '',
    })

    const handleInputChange = (field: keyof LinksType) => (e:Event) => {
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
        <div class="flex flex-col items-center">
        <Heading component="h2" level={2}>Créer un nouveau lien</Heading>
            <form class="flex flex-col items-center gap-2" onSubmit={(e:Event) => handleSubmit(e)}>
                <FormInput inputType="text" onChange={handleInputChange("name")}>Nom</FormInput>
                <FormInput inputType="text" onChange={handleInputChange("link")}>Lien</FormInput>
                <FormSubmit value="Éditer le lien"></FormSubmit>
            </form>
        </div>
    )
}