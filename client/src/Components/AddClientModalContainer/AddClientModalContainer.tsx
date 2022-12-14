import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { addClient } from '../../api/mutations/addClient';
import { getClients } from '../../api/queries/getClients';
import { AddClientModal } from './AddClientModal/AddClientModal';
import { ClientForm, DataCache } from './AddClientModal.types';
import { DEFAULT_CLIENT_FORM } from './AddCLientModal.constants';


export const AddClientModalContainer = () => {
    const [ clientForm, setClientForm ] = useState<ClientForm>(DEFAULT_CLIENT_FORM);
    const [ addingClient, { error }] = useMutation(addClient, {
        update: (cache, { data: { addClient } }) => {
            const dataFromCache: DataCache = cache.readQuery({
                query: getClients,
            });

            if (!dataFromCache) return;

            cache.writeQuery({
                query: getClients,
                data: {
                    clients: [...dataFromCache.clients, addClient]
                }
            })
        }
    });

    return (
        <>
            {error && <p>something went wrong</p>}
            {!error &&
            <AddClientModal
                clientForm={clientForm}
                onChange={value => setClientForm(value)}
                onSubmit={clientForm => addingClient({
                    variables: clientForm,
                })}
            />}
        </>
    )
}