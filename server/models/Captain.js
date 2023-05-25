// Import Schema, Model "require Mongoose" ??
import {FirstMate} from "./FirstMate";

const captainSchema = new Schema ({
    stats: {
      name: "",
      type: "Captain",
      level: 15,
      move: 6,
      fight: 3,
      shoot: 2,
      armor: 9,
      will: 3,
      health: 16,
      gear: [],
      slots: 6,
      background: "",
      
    },
    firstMate: [
      {
        type: Schema.Types.ObjectId,
        ref: 'FirstMate'
      },
    ],
    crewList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'CrewChoice'
      },
    ]
  });

const Captain = model('Captain', captainSchema)

module.exports = Captain;