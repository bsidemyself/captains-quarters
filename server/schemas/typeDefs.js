const { gql } = require('apollo-server-express');

const typeDefs = gql`


   type User {
        _id: ID
        username: String
        email: String
        password: String
        completedcaptains: [CompleteCaptain]
    }


    type Auth {
        user: User
        token: ID
    }

    type Query {
        users: [User]
        user(username: String!): User
        completecaptains(name: String): [CompleteCaptain]
        completecaptain(completecaptainId: ID): CompleteCaptain
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addCompletedCaptain(name: String!, level: Number, move: Number, fight: Number, shoot: Number, armor: Number, will: Number, health: Number, background: String, corePowers: Array, generalPowers: Array): CompleteCaptain
    }
`;
// Credit to Dillon!!!!
module.exports = typeDefs;

// deleteCaptain(captainId: ID!): Captain
// updateCaptain(captainId: ID!): Captain