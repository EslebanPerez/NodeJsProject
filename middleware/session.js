const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");

const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            return handleHttpError(res, "NEED_TOKEN", 401)
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        if(!dataToken._id){
            return handleHttpError(res, "ERROR_ID_TOKEN", 401)
        }
        next()
    } catch (error) {
        return handleHttpError(res, "NOT_SESSION", 401)
    }

}

module.exports = authMiddleware