export const STATUT_CONFIG = {
    idea:"Idée",
    planned:"Planifié",
    inProgress: "En cours",
    onHold: "En pause",
    completed: "Terminé",
    cancelled: "Abandonné"
} as const;

export type StatutType = keyof typeof STATUT_CONFIG;

export type ProjectsType = {
    name: string,
    type: string,
    statut: StatutType,
    category: string,
    description: string,
}

