export type StatutType = "Idée" | "Planifié" | "En cours" | "En pause" | "Terminé" | "Abandonné";

export type ProjectsType = {
    name: string,
    type: string,
    statut: StatutType,
    category: string,
    description: string,
}