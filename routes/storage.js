const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const {createItem, getItem, getItems, updateItem, deleteItem} = require(".././controllers/storage");
const { validatorGetItem } = require('../validators/storage');
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');


router.post("/", authMiddleware, checkRol(["admin"]), uploadMiddleware.single("myfile"), createItem)

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
router.put("/:id", authMiddleware, checkRol(["admin"]), validatorGetItem, updateItem)

/**
 * Delete Item
 */
router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorGetItem, deleteItem);

module.exports = router;