const { Schema, model } = require('mongoose');
import { number } from "prop-types";
import {FirstMate} from "./FirstMate";

const captainSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    level: {
        type: Number,
        required: true,
    },
    move: {
        type: Number,
        required: true,
    },
    fight: {
        type: Number,
        required: true,
    },
    shoot: {
        type: Number,
        required: true,
    },
    armor: {
        type: Number,
        required: true,
    },
    will: {
        type: Number,
        required: true,
    },
    health: {
        type: Number,
        required: true,
    },
    gear: {
        type: Array,
        required: false,
    },
    slots: {
        type: Number,
        required: false,
    },
    background: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Background'
      },
    ],
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
      {
        Captain: [captainSchema],
      }
    ]
  });



module.exports = Captain;