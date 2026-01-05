import "../../tailwind.css"
import FormInput from "../../../components/forms/FormInput";
import Heading from "../../../components/Heading";
import FormSubmit from "../../../components/forms/FormSubmit";
import { SigninFormType } from "../../../types/forms/SigninFormType";
import { createSignal } from "solid-js";

export default function Signin(){

    const [formData, setFormData] = createSignal<SigninFormType>({
        name: '',
        surname: '',
        mail: '',
        username: '',
        password: '',
        passwordConfirmation: '',
    })

    const handleInputChange = (field: keyof SigninFormType) => (e: Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }));
        console.log(formData())
    }

    function handleSubmit(e:Event){
        e.preventDefault();
        console.log(formData());
    }

    return(
        <div class="flex flex-col items-center justify-center min-h-screen">
            <Heading level={2} component="h2">Inscription</Heading>
            <form class="flex flex-col items-center gap-2" onSubmit={(e:Event) => handleSubmit(e)}>
                <FormInput inputType="text" onChange={handleInputChange("surname")}>Nom</FormInput>
                <FormInput inputType="text" onChange={handleInputChange("name")}>Prénom</FormInput>
                <FormInput inputType="email" onChange={handleInputChange("mail")}>Adresse mail</FormInput>
                <FormInput inputType="text" onChange={handleInputChange("username")}>Nom d'utilisateur</FormInput>
                <FormInput inputType="password" onChange={handleInputChange("password")}>Mot de passe</FormInput>
                <FormInput inputType="password" onChange={handleInputChange("passwordConfirmation")}>Confirmation du mot de passe</FormInput>
                <FormSubmit value="S'inscrire"></FormSubmit>
            </form>
        </div>
    )
}