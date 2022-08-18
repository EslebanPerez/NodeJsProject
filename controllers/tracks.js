/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = (req, res) => {
    const data = ['Hola', 'Mundo']
    res.send({data})
}
/**
 * Otener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res)=>{}
/**
 *Obtener un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = (req, res)=>{}
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res)=>{}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res)=>{}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};