const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Se pasa el objeto del usuario
 * @param {*} user
 */
const tokenSing = async (user) => {
  const sing = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sing;
};



module.exports = { tokenSing };
