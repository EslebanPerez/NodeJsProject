const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleError");

const register = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password: password };
    const dataUser = await userModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTER");
  }
};

const login = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await userModel
      .findOne({ email: req.email })
      .select("name email password role");
    if (!user) {
      return handleHttpError(res, "USER_NOT_EXIST", 404);
    }

    const hashPassword = user.get("password");
    const check = await compare(req.password, hashPassword);
    if (!check) {
      return handleHttpError(res, "PASSWORD_INVALID", 401);
    }

    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };
    res.send({ data });
  } catch (error) {
    //console.log(error);
    handleHttpError(res, "ERROR_LOGIN");
  }
};

module.exports = { register, login };
