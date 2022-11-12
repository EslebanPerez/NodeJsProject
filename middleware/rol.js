const { handleHttpError } = require("../utils/handleError");

/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (rol) => (req, res, next) => {
    try {
        const { user } = req;
        const rolesByUser = user.role;
        const checkValueRol = rol.some(roleSingle => rolesByUser.includes(roleSingle) )        
        if(!checkValueRol){
            return handleHttpError(res, 'USER_NOT_PERMISSION', 403)
        }
        next();
    } catch (error) {
        handleHttpError(res, "ERROR_PERMISSION",403)
    }
};

module.exports = checkRol;
