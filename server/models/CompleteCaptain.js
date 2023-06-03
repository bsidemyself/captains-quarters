const { Schema, model } = require('mongoose');

const completeCaptainSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    level: {
        type: Number
    },
    move: {
        type: Number
    },
    fight: {
        type: Number
    },
    shoot: {
        type: Number
    },
    armor: {
        type: Number
    },
    will: {
        type: Number
    },
    health: {
        type: Number
    },
    background: {
        type: String
    },
    corePowers: {
        type: Array
    },
    generalPowers: {
        type: Array
    }
});

const CompleteCaptain = model('CompleteCaptain', completeCaptainSchema);

module.exports = CompleteCaptain;