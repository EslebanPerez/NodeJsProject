const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Se pasa el objeto del usuario
 * @param {*} user
 */
const tokenSign = async (user) => {
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

/**
 * Debe recibir el token  de session el JWT 
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null;
    }
};

module.exports = { tokenSign, verifyToken };
