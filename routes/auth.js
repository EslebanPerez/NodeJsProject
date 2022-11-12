const express = require('express');
const { register, login } = require('../controllers/auth');
const { validatorRegisterUser, validatorLogin } = require('../validators/auth');
const router = express.Router();


/**
 * Register
 */
router.post("/register", validatorRegisterUser, register );
router.post("/login", validatorLogin, login );


module.exports = router;
