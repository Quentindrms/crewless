import { createSignal } from "solid-js"
import "../../tailwind.css"
import { SignUpFormType } from "../../../types/forms/AuthFormType"
import Heading from "../../../components/Heading"
import FormInput from "../../../components/forms/FormInput"
import FormSubmit from "../../../components/forms/FormSubmit"

export default function Signup(){

    const [formData, setFormData] = createSignal<SignUpFormType>({
        mail: '',
        password: '',
    })

    const handleInputChange = (field: keyof SignUpFormType) => (e:Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }))
        console.log(formData())
    }

    function handleSubmit(e:Event){
        e.preventDefault();
        console.log(formData())
    }


    return (
        <div class="flex flex-col items-center justify-center min-h-screen">
            <Heading level={2} component="h2">Connexion</Heading>
            <form class="flex flex-col items-center gap-2" onSubmit={(e:Event) => handleSubmit(e)}>
                <FormInput inputType="email" onChange={handleInputChange("mail")}>Adresse mail</FormInput>
                <FormInput inputType="password" onChange={handleInputChange('password')}>Mot de passe</FormInput>
                <a href="" class="text-light">Mot de passe oublié ?</a>
                <FormSubmit value="Connexion"></FormSubmit>
            </form>
        </div>
    )
}