import { createSignal } from "solid-js"
import Heading from "../../../../components/Heading";
import FormInput from "../../../../components/forms/FormInput";
import { ProjectsType, STATUT_CONFIG } from "../../../../types/Projects";
import FormSelect from "../../../../components/forms/FormSelect";

export default function NewProject() {

    const [formData, setFormData] = createSignal<ProjectsType>({
        name: '',
        category: '',
        statut: "idea",
        type: '',
        description: '',
    });

    const handleChange = (field: keyof ProjectsType) => (e:Event) =>{
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }))
        console.log(formData())
    }

    const statutOptions = Object.entries(STATUT_CONFIG).map(([value, name]) => ({
        value,
        name,
    }))

    return (
        <div class="flex flex-col items-center">
            <Heading level={2} component="h2">Créer un nouveau projet</Heading>
            <form class="" onSubmit={() => console.log('')}>
                <FormInput onChange={handleChange("name")}>Nom du projet</FormInput>
                <FormSelect name="statut" options={statutOptions} onChange={handleChange('statut')}>Statut du projet</FormSelect>
            </form>
        </div>
    )
}