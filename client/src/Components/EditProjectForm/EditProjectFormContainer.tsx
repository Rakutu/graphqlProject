import { EditProjectForm } from './EditProjectForm';
import { useState } from 'react';
import { Project } from './EditProjectForm.types';
import { useMutation } from '@apollo/client';
import { getProject } from '../../api/queries/getProject';
import { updateProject } from '../../api/mutations/updateProject';


interface Props {
    project: Project;
}

export const EditProjectFormContainer = ({ project: { name, description, status, id } }: Props) => {
    const [ projectForm, setProjectForm ] = useState({
        name,
        description,
        status,
    });

    const [ updatingProject ] = useMutation(updateProject, {
        refetchQueries: [{ query: getProject, variables: { id } }],
    })

    return (
        <EditProjectForm
            projectForm={projectForm}
            onChange={projectForm => setProjectForm(projectForm)}
            onSubmit={(projectForm) => updatingProject({
                variables: {
                    id,
                    ...projectForm,
                },
            })}
        />
    )
}