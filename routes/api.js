var express = require('express');
var router = express.Router();
var Score = require('../models/score');

router.get('/tacos', function(req, res) {
    res.json({tacos: ['carne asada', 'tripas', 'alpastor']})
});

router.get('/scores', function(req, res) {
    Score.find({}).sort({'numGuesses': 1, 'seconds': 1}).limit(10).then(scores => res.json(scores));
});

router.post('/scores/new', function(req, res) {
    let b = req.body;
    console.log("body", b)
    let newScore = new Score({
        initials: b.initials, 
        numGuesses: b.numGuesses, 
        seconds: b.seconds
    })
    newScore.save(function(err, doc) {
        res.json(doc)
    });
});

module.exports = router;