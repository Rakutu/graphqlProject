import { connectDB } from './config/db';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';

const express = require('express')
require('dotenv').config();
const cors = require('cors');


const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`)
})