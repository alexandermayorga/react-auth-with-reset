var router = require('express').Router();
const { checkSchema, validationResult } = require('express-validator');

const { loginSchemaValidator } = require('../schemaValidation');

// @route  POST /api/validate
// @desc Testing express validator
// @access PRIVATE
router.post('/', checkSchema(loginSchemaValidator), function (req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    return res.json(req.body)

});


module.exports = router;