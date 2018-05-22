var express = require('express');
var router = express.Router();

router.get('/tacos', function(req, res) {
    res.json({tacos: ['carne asada', 'tripas', 'alpastor']})
})

module.exports = router;