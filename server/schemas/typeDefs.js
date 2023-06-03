const { gql } = require('apollo-server-express');

const typeDefs = gql`


   type User {
        _id: ID
        username: String
        email: String
        password: String
        completedcaptains: [CompletedCaptain]!
    }

    type CompletedCaptain {
        _id: ID
        name: String!, 
        level: Int, 
        move: Int, 
        fight: Int, 
        shoot: Int, 
        armor: Int, 
        will: Int, 
        health: Int, 
        background: String, 
        corePowers: [String], 
        generalPowers: [String]

    }


    type Auth {
        user: User
        token: ID
    }

    type Query {
        users: [User]
        user(username: String!): User
        completedcaptains(name: String): [CompletedCaptain]
        completedcaptain(completedcaptainId: ID): CompletedCaptain
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addCompletedCaptain(name: String!, level: Int, move: Int, fight: Int, shoot: Int, armor: Int, will: Int, health: Int, background: String, corePowers: [String], generalPowers: [String]): CompletedCaptain
    }
`;
// Credit to Dillon!!!!
module.exports = typeDefs;

// deleteCaptain(captainId: ID!): Captain
// updateCaptain(captainId: ID!): Captain