const express = require('express');
const router = express.Router();
const Board = require('../models/board');

router.get('/', (req, res) => {
    Board.find({})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({err});
    });
});

router.post('/', (req, res) => {
    const board = req.body
    Board.create(board)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;