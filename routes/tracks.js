const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
const authMiddleware = require('../middleware/session');
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")
//Aqui se creara la ruta de acceso http://localhost/tracks con los metodos GET, POST, DELETE, PUT

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems)
/**
 * Obtener detalle de Item
 */
 router.get("/:id", validatorGetItem, getItem)
/**
 * Crear un registro de Item
 */
router.post("/", validatorCreateItem, createItem);
/**
 * Actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
/**
 * Eliminar un registro
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
