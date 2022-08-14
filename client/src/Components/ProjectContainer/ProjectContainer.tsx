import { ProjectPage } from './Project/Project';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getProject } from '../../api/queries/getProject';
import { Spiner } from '../Spiner/Spiner';
import { ProjectResponse } from './ProjectContainer.types';

export const ProjectContainer = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery<ProjectResponse>(getProject, {
        variables: {
            id,
        },
    });

    return (
        <>
            {loading && !error && <Spiner />}
            {!loading && error && <p>Something went wrong </p>}
            {!error && !loading && data && <ProjectPage project={data.project} />}
        </>
    )
}