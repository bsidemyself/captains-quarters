const { AuthenticationError } = require('apollo-server-express');
const { User, CompleteCaptain } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('captains');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('captains');
        },
        completecaptains: async (parent, { username }) => {
            const params = username ? { username } : {};
            return CompleteCaptain.find(params);
        },
        completecaptain: async (parent, { captainId }) => {
            return CompleteCaptain.findOne({ _id: captainId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError('Please log in before moving on')
        },
    },

    Mutation: {

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
           },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError('No user found with that username, please try another.');
            }
            const pw = await user.isCorrectPassword(password);
            if (!pw) {
                throw AuthenticationError('The password or username is incorrect, please try again.');
            }
            const token = signToken(user);
            return { token, user };
            },
        
        addCompletedCaptain: async (parent, { name, level, move, fight, shoot, armor, will, health, background, corePowers, generalPowers }, context) => {
            if (context.user) {
                const completecaptain = await CompleteCaptain.create({
                    name,
                    level,
                    move,
                    fight,
                    shoot,
                    armor,
                    will,
                    health,
                    background,
                    corePowers,
                    generalPowers,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { completedcaptains: completecaptain._id}}
                );
                return completecaptain;
            }
        } 

    }
};


module.exports = resolvers;





