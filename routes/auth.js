const express = require('express');
const { register } = require('../controllers/auth');
const { validatorRegisterUser } = require('../validators/auth');
const router = express.Router();


/**
 * Register
 */
router.post("/register", validatorRegisterUser, register );


module.exports = router;
