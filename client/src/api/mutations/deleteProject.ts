import { gql } from '@apollo/client';

export const deleteProject = gql`
    mutation deleteProject($id: String!) {
        deleteProject(id: $id) {
            id
        }
    }
`;