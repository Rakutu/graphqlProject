import { connect } from 'mongoose';


export const connectDB = async () => {
    const connection = await connect(process.env.MONGO_URI || '');
    console.log(`MongoDB connected: ${connection.connection.host}`);
}