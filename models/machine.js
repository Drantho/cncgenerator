const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const machineSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for machine"
    },
    description: {
        type: String
    },
    standardCode: {
        type: String,
    },
    currentMultiplier: {
        type: Number
    },
    notes: {
        type: String
    }
});

const Machine = mongoose.model("Machine", machineSchema);

module.exports = Machine;
