const { Schema, model } = require('mongoose');

const captainSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    background: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Background'
        },
    ],
    stats: {
        type: Object,
    },
    powers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Background',
        }
    ],
    firstMate: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FirstMate'
        }
    ],
    crewMembers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CrewChoice'
        }
    ]
});

const Captain = model('Captain', captainSchema);

module.exports = Captain;