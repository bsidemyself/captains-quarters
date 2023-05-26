const { AuthenticationError } = require('apollo-server-express');
const { User, Captain } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError('Please log in before moving on')
        }
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
            return user{user, token };
        },

        createCaptain: async (parent, { Captain }, context) => {
           if (context.user) {
          return User.findOneAndUpdate(
            {
                $addToSet: { Captain: Captain },
            },
            {
                new: true,
                runValidators: true,
            }
          );

            // await User.findByIdAndUpdate(context.user.id, { $push: { Captain: Captain },
            // });

            // return captain;
           }
        },

    deleteCaptain: async (parent, { captainId }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndDelete({
                _id: captainId,
                $pull: context.user.username,
                new: true,
            });
            await User.findOneAndUpdate(
                { _id: context.user._id},
                { $pull: { captain: { captainId: captainId} }},
                { new: true }
            );
            return updatedUser;
        }
    },
    updateCaptain: async (parent, { captainId }, context ) => {
        if (context.user) {
        const captain = await Captain.findByIdAndUpdate(
            id,
            { new: true }
        );
        return captain;
    }

    }
    }
};