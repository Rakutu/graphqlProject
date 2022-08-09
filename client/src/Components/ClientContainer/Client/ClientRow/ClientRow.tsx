import { FaTrash } from 'react-icons/fa';
import { Client, OnDelete } from '../../ClientContainer.types';


interface Props {
    client: Client;
    onDelete: OnDelete;
}


export const ClientRow = (props: Props) => {
    const {
        client: {
            name,
            phone,
            email,
            id,
        },
        onDelete,
    } = props;


    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete({
                    variables: { id },
                })}>
                    <FaTrash/>
                </button>
            </td>
        </tr>
    );
}