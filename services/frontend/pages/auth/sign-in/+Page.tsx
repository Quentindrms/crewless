import "../../tailwind.css"
import FormInput from "../../../components/forms/FormInput";
import Heading from "../../../components/Heading";
import FormSubmit from "../../../components/forms/FormSubmit";

export default function Signin(){

    return(
        <div class="flex flex-col items-center justify-center min-h-screen">
            <Heading level={2} component="h2">Inscription</Heading>
            <form class="flex flex-col items-center gap-2" onSubmit={(e:Event) => e.preventDefault()}>
                <FormInput inputType="text" onChange={()=>console.log('')}>Nom</FormInput>
                <FormInput inputType="text" onChange={()=>console.log('')}>Prénom</FormInput>
                <FormInput inputType="email" onChange={()=>console.log('')}>Adresse mail</FormInput>
                <FormInput inputType="text" onChange={() =>console.log('')}>Nom d'utilisateur</FormInput>
                <FormInput inputType="password" onChange={() => console.log('')}>Mot de passe</FormInput>
                <FormInput inputType="password" onChange={() => console.log('')}>Confirmation du mot de passe</FormInput>
                <FormSubmit value="S'inscrire"></FormSubmit>
            </form>
        </div>
    )
}