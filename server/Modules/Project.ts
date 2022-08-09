import { model, Schema, Types } from 'mongoose';


const ProjectSchema = new Schema({
    clientId: {
        type: Types.ObjectId,
        ref: 'Client',
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not started', 'In progress', 'Completed']
    },
});

export const Project = model('Project', ProjectSchema)