import { gql } from '@apollo/client';


export const addProject = gql`
    mutation (
        $name: String!, 
        $description: String!, 
        $status: ProjectStatus!, 
        $clientId: String!) {
            addProject(
                name: $name, 
                description: $description, 
                status: $status, 
                clientId: $clientId) {
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