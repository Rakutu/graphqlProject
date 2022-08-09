export interface Client {
    phone: string;
    name: string;
    email: string;
    id: string;
}

export interface ClientResponse {
    clients: Client[];
}

export interface DataFromCache {
    clients: Client[]
}

export type DataCache = DataFromCache | null;

interface deleteOptions {
    variables: {
        id: string;
    };
}

export type OnDelete = (options: deleteOptions) => void;