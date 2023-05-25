const { AuthenticationError } = require('apollo-server-express');
const { User, Captain } = require('../models');
const { signToken } = require('../utils/auth');