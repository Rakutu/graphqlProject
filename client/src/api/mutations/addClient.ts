import { gql } from '@apollo/client';

export const addClient = gql`
    mutation addClient ($name: String!, $email: String!, $phone: String!) {
        addClient(name: $name, email: $email, phone: $phone) {
            id
            name
            email
            phone
        }
    }
`;