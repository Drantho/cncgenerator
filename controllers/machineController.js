const express = require('express');
const router = express.Router();
const Machine = require('../models/machine');

router.get('/', (req, res) => {
    Machine.find({})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({err});
    });
});

router.post('/', (req, res) => {
    const machine = req.body
    Machine.create(machine)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;