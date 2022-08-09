import { ClientRow } from './ClientRow';
import { Client, OnDelete } from '../ClientContainer.types';


interface Props {
    clients: Client[];
    onDelete: OnDelete;
}

export const Clients = ({ clients, onDelete }: Props) => (
    <table className="table table-hover mt-3">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {clients.map((client: Client) => (
                <ClientRow key={client.id} client={client} onDelete={onDelete}/>
            ))}
        </tbody>
    </table>
)