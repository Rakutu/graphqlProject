export interface Client {
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
    client: Client;
}

export interface ProjectResponse {
    project: Project;
}
