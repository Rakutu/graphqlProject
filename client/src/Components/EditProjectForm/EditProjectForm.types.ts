interface CLient {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    status: string;
    client: CLient;
}

export interface ProjectForm {
    name: string;
    description: string;
    status: string;
}