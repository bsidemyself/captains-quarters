import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            name
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            completedcaptains {
                _id
                name
            }
        }
    }
`;

export const QUERY_COMPLETEDCAPTAINS = gql`
    query completecaptains {
        completecaptains {
            _id
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

export const QUERY_SINGLE_CAPTAIN = gql`
    query completecaptain($completecaptainId: ID!) {
        completecaptain(completecaptainId: $completecaptainId) {
            _id
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      completedcaptains {
        _id
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
  }
`;