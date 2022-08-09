import { gql } from '@apollo/client';


export const getClients = gql`
    query getClients {
        clients {
            id
            name
            email
            phone
        }
    }
`;