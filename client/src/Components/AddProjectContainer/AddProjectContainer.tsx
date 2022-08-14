import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getProjects } from '../../api/queries/getProjects';
import { addProject } from '../../api/mutations/addProject';
import { DEFAULT_PROJECT_FORM } from './AddProjectContaer.constants';
import { DataCache } from './AddProjectContainer.types';
import { AddProjectModal } from './AddProjectModal/AddProjectModal';
import { getClients } from '../../api/queries/getClients';
import { Spiner } from '../Spiner/Spiner';


export const AddProjectContainer = () => {
    const [ projectForm, setProjectForm ] = useState(DEFAULT_PROJECT_FORM);
    const { loading, error: loadError, data } = useQuery(getClients);
    const [ addingProject, { error } ] = useMutation(addProject, {
        update: (cache, { data: { addProject } }) => {
            const dataFromCache: DataCache = cache.readQuery({
                query: getProjects,
            });

            if (!dataFromCache) return;

            cache.writeQuery({
                query: getProjects,
                data: {
                    projects: [...dataFromCache.projects, addProject],
                },
            });
        }
    });

    return (
        <>
            {error || loadError && <p>something went wrong</p>}
            {loadError && <Spiner />}
            {!error && !loadError && !loading && (
                <AddProjectModal
                    projectForm={projectForm}
                    clients={data.clients}
                    onChange={value => setProjectForm(value)}
                    onSubmit={projectForm => addingProject({
                        variables: projectForm,
                    })}
                />
            )}
        </>
    )
}