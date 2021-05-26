const express = require('express');
const router = express.Router();
const Program = require('../models/Program');

router.get('/', (req, res) => {
    Program.find({})
    .populate('board')
    .populate('machine')
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json({err});
    });
});

router.post('/', async (req, res) => {
    const program = req.body;

    Program.create(program)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    const program = req.body;

    Program.findByIdAndUpdate(req.params.id, program)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
    Program.deleteOne({
        _id:req.params.id
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;