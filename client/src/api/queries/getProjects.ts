import { gql } from '@apollo/client';


export const getProjects = gql`
    query getProjects {
        projects {
            id
            name
            description
            status
        }
    }
`;