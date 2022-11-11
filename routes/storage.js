const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const {createItem, getItem, getItems, updateItem, deleteItem} = require(".././controllers/storage");
const { validatorGetItem } = require('../validators/storage');


router.post("/", uploadMiddleware.single("myfile"), createItem)

/**
 * Lista de Items
 */
router.get("/", getItems)

/**
 * Detalle de Item
 */
router.get("/:id", validatorGetItem, getItem)

/**
 * Actualizar item
 */
router.put("/:id", validatorGetItem, updateItem)

/**
 * Delete Item
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;