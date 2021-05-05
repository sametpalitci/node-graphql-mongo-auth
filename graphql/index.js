const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const UserMutation = require('./mutations/User');

const rootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "Default Query",
    fields: {
        hello: {
            type: GraphQLString,
            resolve: (parent, args) => {
                return "world";
            }
        }
    }
});

const rootMutation = new GraphQLObjectType({
    name: "Mutation",
    description: "Default Mutation",
    fields: {
        login: UserMutation.login(),
        register: UserMutation.register()
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
})