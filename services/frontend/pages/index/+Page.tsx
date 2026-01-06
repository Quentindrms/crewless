import "../tailwind.css"

import Button from "../../components/Button";
import Heading from "../../components/Heading";
import NavigationLink from "../../components/NavigationLink";
import Paragraph from "../../components/Paragraph";
import VignetteSubNav from "../../components/VignetteSubNav";
import Vignette from "../../components/Vignette";
import VignetteNote from "../../components/VignetteNote";
import {
  CheckCircleFill,
  CheckCircleOutline,
} from "../../components/icons/CheckCircle";
import Delete from "../../components/icons/Delete";
import Edit from "../../components/icons/Edit";
import VignetteLien from "../../components/VignetteLien";
import Projet from "../../components/Projet";
import VignetteTask from "../../components/VignetteTask";
import ProjetFilter from "../../components/ProjetFilter";
import ProjetSubnav from "../../components/ProjetSubNav";
import SidebarNavigation from "../../components/navigation/SidebarNavigation";

export default function Index() {
  return (
    <>
      <Heading level={1} bold="bold" component="h1">
        Crewless
      </Heading>
      <Paragraph component="p" fontSize="base">
        Ceci est un paragraphe
      </Paragraph>
      <Paragraph component="span" fontSize="lg" boldValue="extralight">
        Ceci est un span
      </Paragraph>
      <Paragraph>Ceci est un paragraphe sans balise spécifiée</Paragraph>

      <NavigationLink target="#">Lien de navigation</NavigationLink>
      <div class="flex flex-col gap-5">
        <Button>Bouton primaire</Button>
        <Button type="secondary" bold="bold">
          Bouton secondaire
        </Button>
        <Button type="delete">Supprimer</Button>
      </div>

      <div class="p-5 flex flex-row gap-5">
        <VignetteSubNav target="#">Vignette sub nav</VignetteSubNav>
        <Vignette href="#">Temps passé</Vignette>
      </div>

      <Projet
        name="Projet"
        description="Ceci est un projet de démonstration"
        statut="En cours"
        type="Projet"
        time="5"
      ></Projet>
      <VignetteNote
        title="Nom de la note"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, dui at posuere rhoncus, ligula diam mattis justo, vitae pharetra nulla orci sit amet est. Morbi bibendum enim eget accumsan pretium. Duis ac molestie metus. Proin ullamcorper facilisis nisi, id efficitur nisl. Morbi varius sit amet eros vel elementum"
        done={false}
        date="01/01/26"
      />
      <VignetteLien
        title="Nom du lien"
        target="http://google.fr"
        description="Un lien de démonstration menant vers google"
      />
      <VignetteTask
        title="Nom de la tâche"
        description="Ceci est une tâche de démonstration afin de démontrer le bon fonctionnement de la tâche"
        time="2"
      />
      <div class="flex gap-5">
        <CheckCircleFill />
        <CheckCircleOutline />
        <Edit />
        <Delete />
      </div>

      <div class="flex flex-col gap-4">
        <ProjetFilter />
        <ProjetSubnav />
      </div>
    </>
  );
}
