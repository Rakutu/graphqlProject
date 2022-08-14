import { model, Schema, Types } from 'mongoose';


const ProjectSchema = new Schema({
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
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
    },
});

export const Project = model('Project', ProjectSchema)