var express = require('express');
var router = express.Router();

// @route  POST /api/user
// @desc Authenticate User
// @access PUBLIC
router.post('/', function (req, res, next) {

    if (!req.user) return res.status(401).end('You need to be logged in');

    res.status(200).end()


});

module.exports = router;
