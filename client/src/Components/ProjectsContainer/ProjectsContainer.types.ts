export interface Project {
    description: string;
    name: string;
    status: string;
    id: string;
}

export interface ProjectResponse {
    projects: Project[];
}