const express = require('express');
const { matchedData } = require('express-validator');
const { userModel } = require('../models');
const { compare, encrypt } = require('../utils/handlePassword');
const { validatorLogin, validatorRegisterUser } = require('../validators/auth');
const router = express.Router();


/**
 * Login
 */
router.post("/register", validatorRegisterUser, async (req, res) =>{
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password:password};
    const data = await userModel.create(body);
    data.set('password', undefined, { strict: false})
    res.send({data});
} );


module.exports = router;
