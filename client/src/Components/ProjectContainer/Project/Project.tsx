import { Link } from 'react-router-dom';
import { Project } from '../ProjectContainer.types';
import { ClientInfo } from './ClientInfo/ClientInfo';


interface Props {
    project: Project;
}

export const ProjectPage = ({ project }: Props) => {
    const {
        name,
        description,
        status,
        client
    } = project;

    return (
        <div className="mx-auto w-75 card p-5">
            <Link to="/" className="btn btn-light btn-sm 2-25 d-inline ms-auto">Go to home</Link>
            <h1>{name}</h1>
            <p>{description}</p>
            <h5 className="mt-3">Project Status</h5>
            <p className="lead">{status}</p>
            <ClientInfo client={client}/>
        </div>
    )
}