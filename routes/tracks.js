const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
const authMiddleware = require('../middleware/session');
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")
//Aquí se creara la ruta de acceso http://localhost/tracks con los métodos GET, POST, DELETE, PUT

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems)
/**
 * Obtener detalle de Item
 */
 router.get("/:id",authMiddleware, validatorGetItem, getItem)
/**
 * Crear un registro de Item
 */
router.post("/",authMiddleware, validatorCreateItem, createItem);
/**
 * Actualizar un registro
 */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
/**
 * Eliminar un registro
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
