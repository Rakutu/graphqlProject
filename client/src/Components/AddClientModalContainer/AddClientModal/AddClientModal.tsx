import { FaUser } from 'react-icons/fa';
import { ClientForm } from '../AddClientModal.types';
import { FormEvent } from 'react';
import { DEFAULT_CLIENT_FORM } from '../AddCLientModal.constants';


interface Props {
    clientForm: ClientForm;
    onChange: (value: ClientForm) => void;
    onSubmit: (value: ClientForm) => void;
}

type HandleSubmit = (props: Props) => (event: FormEvent) => void;

const handleSubmit: HandleSubmit = ({ onSubmit, onChange, clientForm }) => (event) => {
    event.preventDefault();
    if (Object.values(clientForm).some(field => field === '')) return alert('Please write all fields');

    onSubmit(clientForm);
    onChange(DEFAULT_CLIENT_FORM);
}

export const AddClientModal = (props: Props) => {
    const {
        clientForm: {
            name,
            phone,
            email,
        },
        onChange,
    } = props;

    return (
        <>
            <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addClientModal"
            >
                <div className="d-flex align-items-center">
                    <FaUser className="icon"/>
                    <div>Add client</div>
                </div>
            </button>
            <div
                id="addClientModal"
                className="modal fade"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addClientModal">Add client</h5>
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
                                            onChange={({target: {value}}) => onChange({
                                                phone,
                                                email,
                                                name: value,
                                            })}
                                        />
                                    </label>
                                    <label className="from-label w-100">
                                        <div>Email</div>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={({target: {value}}) => onChange({
                                                phone,
                                                name,
                                                email: value,
                                            })}
                                        />
                                    </label>
                                    <label className="from-label w-100">
                                        <div>Phone</div>
                                        <input
                                            id="phone"
                                            type="text"
                                            className="form-control"
                                            value={phone}
                                            onChange={({target: {value}}) => onChange({
                                                name,
                                                email,
                                                phone: value,
                                            })}
                                        />
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