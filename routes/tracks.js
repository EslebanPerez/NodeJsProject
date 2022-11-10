const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem} = require('../controllers/tracks');
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
 * Crear un regitro de Item
 */
router.post("/", validatorCreateItem, createItem);

module.exports = router;
