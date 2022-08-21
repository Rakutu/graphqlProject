import { ProjectForm } from './EditProjectForm.types';
import { FormEvent } from 'react';
import { FaUser } from 'react-icons/fa';


interface Props {
    projectForm: ProjectForm;
    onChange: (project: ProjectForm) => void;
    onSubmit: (project: ProjectForm) => void;
}

type HandleSubmit = (props: Props) => (event: FormEvent) => void;

const handleSubmit: HandleSubmit = ({ onSubmit, projectForm }) => (event) => {
    event.preventDefault();
    if (Object.values(projectForm).some(field => field === '')) return alert('Please write all fields');

    onSubmit(projectForm);
}

export const EditProjectForm = (props: Props) => {
    const {
        projectForm: {
            name,
            description,
            status,
        },
        onChange,
    } = props;

    return (
        <div className="mt-5">
            <button
                className="btn btn-primary m-2"
                data-bs-toggle="modal"
                data-bs-target="#updateClientModal"
            >
                <div className="d-flex align-items-center">
                    <FaUser className="icon"/>
                    <div>Update Project</div>
                </div>
            </button>
            <div
                id="updateClientModal"
                className="modal fade"
                aria-labelledby="ModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateClientModal">Add client</h5>
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(props)}>
                                <label className="from-label w-100">
                                    <div>Name</div>
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={({ target: { value} }) => onChange({
                                            description,
                                            status,
                                            name: value,
                                        })}
                                    />
                                </label>
                                <label className="from-label w-100">
                                    <div>Description</div>
                                    <textarea
                                        id="description"
                                        className="form-control"
                                        value={description}
                                        onChange={({ target: { value} }) => onChange({
                                            status,
                                            name,
                                            description: value,
                                        })}
                                    />
                                </label>
                                <label className="from-label w-100">
                                    <div>Status</div>
                                    <select
                                        id="status"
                                        className="form-select"
                                        value={status}
                                        onChange={({ target: { value} }) => onChange({
                                            name,
                                            description,
                                            status: value,
                                        })}
                                    >
                                        <option value="new">Not started</option>
                                        <option value="progress">In progress</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </label>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button className="btn btn-primary" type="submit" data-bs-dismiss="modal">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}