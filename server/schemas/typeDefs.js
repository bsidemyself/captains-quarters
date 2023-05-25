const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        captains: [Captain]
    }

    type Captain {
        _id: ID
        stats: {
            name: String
            type: String
            level: Number
            move: Number
            fight: Number
            shoot: Number
            armor: Number
            will: Number
            health: Number
            gear: []
            slots: Number
            background: [Background]
            firstMate: [FirstMate]
            crewList: [CrewChoice]
        }
    }

    type Auth {
        _id: ID
        user: User
    }

    type Query {
        user: [User]
        user(username: String!): User
        captains(name: String!): [Captain]
        captain(captainId: ID!): Captain
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        createCaptain(name: String!, level: Number!, move: Number!, fight: Number!, shoot: Number!, armor: Number!, will: Number!, health: Number!, gear: Array, slots: Number, background: [Background], firstMate: [FirstMate], crewList: [Soldiers])
        deleteCaptain(captainId: ID!): Captain
        updateCaptain(captainId: ID!): Captian

    }
`;

module.exports = typeDefs;