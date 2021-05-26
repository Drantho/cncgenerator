const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const programSchema = new Schema({
    board: { type: Schema.Types.ObjectId, ref: 'Board' },
    machine: { type: Schema.Types.ObjectId, ref: 'Machine' },
    code: {
        type: String
    },
    notes: {
        type: String
    }
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;