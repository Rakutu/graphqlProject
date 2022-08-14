import { gql } from '@apollo/client';


export const getProject = gql`
    query getProject($id: ID!) {
        project(id: $id) {  
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`;