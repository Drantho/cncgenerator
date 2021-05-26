const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for board"
    },
    year: {
        type: Number,
    },
    description: {
        type: String
    },
    profileType: {
        type: String
    },
    length: {
        type: Number
    },
    notes: {
        type: String
    }
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;