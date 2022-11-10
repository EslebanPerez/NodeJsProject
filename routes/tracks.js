const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem} = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")
//Aqui se creara la ruta de acceso http://localhost/tracks con los metodos GET, POST, DELETE, PUT

/**
 * Lista los items
 */
router.get("/", getItems)
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

module.exports = router;
