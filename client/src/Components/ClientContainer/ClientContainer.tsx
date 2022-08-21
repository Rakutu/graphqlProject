import { useMutation, useQuery } from '@apollo/client';
import { Clients } from './Client';
import { getClients } from '../../api/queries/getClients';
import { deleteClient } from '../../api/mutations/deleteClient';
import { Spiner } from '../Spiner/Spiner';
import { Client, ClientResponse, DataCache } from './ClientContainer.types';
import { getProjects } from '../../api/queries/getProjects';


export const ClientContainer = () => {
    const { loading, error: loadError, data } = useQuery<ClientResponse>(getClients);
    const [ deletedClient, { error: deleteError } ] = useMutation(deleteClient, {
        // update: (cache, { data: { deleteClient } }) => {
        //     const dataFromCache: DataCache = cache.readQuery({
        //         query: getClients,
        //     });
        //
        //     if (!dataFromCache) return;
        //
        //     cache.writeQuery({
        //         query: getClients,
        //         data: {
        //             clients: dataFromCache.clients.filter((client: Client) =>
        //                 client.id !== deleteClient.id),
        //         },
        //     });
        // },
        refetchQueries: [{ query: getClients }, { query: getProjects }],
    });

    return (
        <>
            {loading && <Spiner />}
            {loadError || deleteError && <p>something went wrong</p>}
            {!loading && !loadError && data && <Clients clients={data.clients} onDelete={deletedClient}/>}
        </>
    )
}