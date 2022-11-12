const bcrypt = require ("bcryptjs")
/**
 * Contraseña sin encriptar
 * @param {*} password 
 */
const encrypt = async (password) =>{
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

/**
 * Pasar contraseña sin encriptar y contraseña encriptada
 * @param {*} password 
 * @param {*} hash 
 */
const comparar = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = {encrypt, comparar}