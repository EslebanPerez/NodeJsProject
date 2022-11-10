const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem} = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
const {validatorCreateItem} = require("../validators/tracks")
//Aqui se creara la ruta de acceso http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", getItems)

router.post("/", validatorCreateItem, createItem);

module.exports = router;
