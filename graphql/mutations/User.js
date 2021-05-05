const { GraphQLString } = require('graphql');
const UserType = require('../types/User');
const UserResolver = require('../resolvers/User')
const login = () => {
    return {
        type: UserType,
        description: 'User Login',
        args: {
            username: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            }
        },
        resolve: (parent, args) => {
            return UserResolver.auth(args)
        }
    }
}
const register = () => {
    return {
        type: UserType,
        description: 'User Register',
        args: {
            username: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            }
        },
        resolve: (parent, args) => {
            return UserResolver.register(args)
        }
    }
}

module.exports = { login, register }