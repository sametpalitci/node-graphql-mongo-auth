require('dotenv').config({});
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { graphqlHTTP } = require('express-graphql');
const GraphQLMainSchema = require('./graphql');

app.use('/graphql', graphqlHTTP({
    schema: GraphQLMainSchema,
    graphiql: true
}))

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(3000, () => {
        console.log("App is listening at 3000 port")
    })
})