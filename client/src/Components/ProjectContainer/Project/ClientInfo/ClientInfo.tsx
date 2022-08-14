import { Client } from '../../ProjectContainer.types';
import { FaEnvelope, FaIdBadge, FaPhone } from 'react-icons/fa';


interface Props {
    client: Client;
}

export const ClientInfo = ({ client }: Props) => {
    const {
        name,
        email,
        phone,
    } = client;

    return (
        <div>
            <h5 className="mt-5">Client information</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    <FaIdBadge className="icon" />
                    <span>{name}</span>
                </li>
                <li className="list-group-item">
                    <FaEnvelope className="icon" />
                    <span>{email}</span>
                </li>
                <li className="list-group-item">
                    <FaPhone className="icon" />
                    <span>{phone}</span>
                </li>
            </ul>
        </div>
    )
}