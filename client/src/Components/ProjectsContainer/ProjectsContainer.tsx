import { useQuery } from '@apollo/client';
import { getProjects } from '../../api/queries/getProjects';
import { Spiner } from '../Spiner/Spiner';
import { ProjectResponse } from './ProjectsContainer.types';
import { ProjectCard } from './ProjectCard';


type RenderProjects = (data: ProjectResponse) => JSX.Element;

const renderProjects: RenderProjects = ({ projects }) => {
    const projectsOrNot = projects.length > 0
        ? projects.map(project =>
            <ProjectCard
                key={project.id}
                project={project}
            />)
        : <p>Not projects</p>;

    return (
        <div className="row mt-4">
            {projectsOrNot}
        </div>
    )
}

export const ProjectsContainer = () => {
    const { loading, error: loadError, data } = useQuery<ProjectResponse>(getProjects);

    return (
        <>
            {loading && <Spiner />}
            {loadError && <p>something went wrong</p>}
            {!loading && !loadError && data && renderProjects(data)}
        </>
    )
}