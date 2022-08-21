import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { deleteProject } from '../../api/mutations/deleteProject';
import { getProjects } from '../../api/queries/getProjects';


export const DeleteProjectButton = ({ projectId }: { projectId: string }) => {
    const navigate = useNavigate();
    const [ deletingProject ] = useMutation(deleteProject, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: getProjects }],
    });

    return (
        <div className="mt-5">
            <button className="btn btn-danger m-2" onClick={() => deletingProject()}>
                <FaTrash className="icon"/>
                Delete project
            </button>
        </div>
    )
}