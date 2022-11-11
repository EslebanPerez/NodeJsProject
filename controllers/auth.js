const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { tokenSing } = require("../utils/handleJwt");
const { encrypt } = require("../utils/handlePassword");

const register = async(req, res)=>{
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password:password};
    const dataUser = await userModel.create(body);
    dataUser.set('password', undefined, { strict: false})
    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    }
    res.send({data});
}

module.exports = {register}