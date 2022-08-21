import { gql } from '@apollo/client';


export const updateProject = gql`
    mutation (
        $id: ID!,
        $name: String!,
        $description: String!,
        $status: ProjectStatusUpdate!,
    ) {
        updateProject(
            id: $id,
            name: $name,
            description: $description,
            status: $status,
        ) {
            id
            name
            description
            status
            client {
                name
                phone
                email
            }
        }
    }`;