import { FaList } from 'react-icons/fa';
import { FormEvent } from 'react';
import { ProjectForm } from '../AddProjectContainer.types';
import { DEFAULT_PROJECT_FORM } from '../AddProjectContaer.constants';
import { Client } from '../../ProjectContainer/ProjectContainer.types';


interface Props {
    projectForm: ProjectForm;
    clients: Client[],
    onChange: (value: ProjectForm) => void;
    onSubmit: (value: ProjectForm) => void;
}

type HandleSubmit = (props: Props) => (event: FormEvent) => void;

const handleSubmit: HandleSubmit = ({ onSubmit, onChange, projectForm }) => (event) => {
    event.preventDefault();
    if (Object.values(projectForm).some(field => field === '')) return alert('Please write all fields');

    onSubmit(projectForm);
    onChange(DEFAULT_PROJECT_FORM);
}

export const AddProjectModal = (props: Props) => {
    const {
        projectForm: {
            name,
            description,
            status,
            clientId,
        },
        clients,
        onChange,
    } = props;

    return (
        <>
            <button
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#addProjectModal"
            >
                <div className="d-flex align-items-center">
                    <FaList className="icon"/>
                    <div>Add project</div>
                </div>
            </button>
            <div
                id="addProjectModal"
                className="modal fade"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addProjecttModal">Add project</h5>
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(props)}>
                                <div className="mb-3">
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
                                                clientId,
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
                                                clientId,
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
                                                clientId,
                                                status: value as ProjectForm['status'],
                                            })}
                                        >
                                            <option value="new">Not started</option>
                                            <option value="progress">In progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </label>
                                    <label className="from-label w-100">
                                        <div>Client</div>
                                        <select
                                            id="ClientId"
                                            className="form-select"
                                            value={clientId}
                                            onChange={({ target: { value} }) => onChange({
                                                    name,
                                                    description,
                                                    status,
                                                    clientId: value,
                                                })
                                            }
                                        >
                                            <option value="" disabled>Select a client</option>
                                            {clients.map(({ name, id }) => (
                                                <option key={id} value={id}>{name}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button className="btn btn-primary" type="submit" data-bs-dismiss="modal">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}