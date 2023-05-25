const { Schema, model } = require('mongoose');
import { Captain } from "./Captain";

const firstMateSchema = new Schema (
        {
        name: {
        type: String
        }
        },
       { 
        specialty: {
       type: String
        }
        },
        {
            level: {
                type: Number
            }
        },

        {
            move: {
                type: Number
            }
        },
       { 
        fight: {
            type: Number
        }
    },
        {
    shoot: {
        type: Number
    }
        },
       { 
        armor: {
            type: Number
        }
    },
       {
         will: {
            type: Number
         }
    },
       {
         health: {
            type: Number
         }
    },
      { 
         gear: []
    },
        {
            slots: {
                type: Number
            }
        },
        {
            background: {
                type: String
            }
        },
        {
    captain: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Captain'
        }
        ]
})

const FirstMate = model('FirstMate', firstMateSchema);

module.exports = FirstMate;