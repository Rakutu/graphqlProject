import {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull, GraphQLEnumType,
} from 'graphql';
import { Project } from '../Modules/Project';
import { Client } from '../Modules/Client';



const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve({ clientId }) {
                return Client.findById(clientId);
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve() {
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Client.findById(id);
            }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve() {
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }) {
                return Project.findById(id);
            }
        }
    },
});

const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClient: {
            type: ClientType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, { name, phone, email }) => {
                const client = new Client({
                    name,
                    email,
                    phone,
                });

                return client.save();
            },
        },
        deleteClient: {
            type: ClientType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: (parent, { id }) => {
                Project.find({ clientId: id }).then(projects => {
                    projects.forEach(project => project.remove());
                });

                return Client.findByIdAndRemove(id);
            },
        },
        updateClient: {
            type: ClientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                phone: { type: GraphQLString },
                email: { type: GraphQLString },
            },
            resolve: (parent, { id, ...clientInfo }) => {
                return Client.findByIdAndUpdate(id, {
                    $set: {
                        ...clientInfo,
                    },
                }, { new: true });
            },
        },
        addProject: {
            type: ProjectType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatus',
                        values: {
                            new: { value: 'Not started' },
                            progress: { value: 'In progress' },
                            completed: { value: 'Completed' },
                        },
                    }),
                    defaultValue: 'Not started',
                },
                clientId: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, { name, description, status, clientId }) => {
                const project = new Project({
                    name,
                    description,
                    status,
                    clientId,
                });

                return project.save();
            },
        },
        deleteProject: {
            type: ProjectType,
            args: { id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve: (parent, { id }) => {
                return Project.findByIdAndRemove(id);
            },
        },
        updateProject: {
            type: ProjectType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatusUpdate',
                        values: {
                            new: { value: 'Not started' },
                            progress: { value: 'In progress' },
                            completed: { value: 'Completed' },
                        },
                    }),
                },
            },
            resolve: (parent, { id, ...projectInfo }) => {
                return Project.findByIdAndUpdate(id, {
                    $set: { ...projectInfo },
                }, { new: true });
            },
        },
    },
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
})