import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const COMPLETE_CAPTAIN = gql`
    mutation addCompletedCaptain($name: String!, $level: Number, $move: Number, $fight: Number, $shoot: Number, $armor: Number, $will: Number, $health: Number, $background: String, $corePowers: Array, $generalPowers: Array) {
        addCompletedCaptain(name: $name, level: $level, move: $move, fight: $fight, shoot: $shoot, armor: $armor, will: $will, health: $health, background: $background, corePowers: $corePowers, generalPowers: $generalPowers) {
            name
            level
            move
            fight
            shoot
            armor
            will
            health
            background
            corePowers
            generalPowers
        }
    }
`;



