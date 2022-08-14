export interface ProjectForm {
    name: string;
    description: string;
    status: 'progress' | 'new' | 'completed';
    clientId?: string;
}

interface CLient {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface Project {
    name: string;
    description: string;
    status: string;
    client: CLient;
}

export interface DataFromCache {
    projects: Project[];
}

export type DataCache = DataFromCache | null;