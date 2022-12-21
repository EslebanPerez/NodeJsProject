const {check} = require ('express-validator');
const validateResults = require ("../utils/handleValidator");

const validatorRegisterUser = [
    check("name").exists().notEmpty().isLength({min:3, max:50}),
    check("age").exists().notEmpty().isNumeric({min:3, max:50}),
    check("role").optional(),
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    check("email").exists().notEmpty().isEmail(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
]

const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
]

module.exports = {validatorRegisterUser, validatorLogin}