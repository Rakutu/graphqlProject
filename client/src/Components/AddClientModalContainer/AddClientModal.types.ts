import { Client } from '../ClientContainer';

export interface ClientForm {
    name: string;
    email: string;
    phone: string;
}

export interface DataFromCache {
    clients: Client[];
}

export type DataCache = DataFromCache | null;
