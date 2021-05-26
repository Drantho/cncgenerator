const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

require('dotenv').config()

const machineController = require('./machineController');
const boardController = require('./boardController');
const programController = require('./programController');

router.use('/machine', machineController);
router.use('/board', boardController);
router.use('/program', programController);

router.get("/", (req, res) => {
    res.json({msg: "This is the home page"})
});

module.exports = router;