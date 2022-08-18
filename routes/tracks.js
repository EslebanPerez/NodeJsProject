const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem} = require('../controllers/tracks')

//Aqui se creara la ruta de acceso http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", getItems)

router.post("/", createItem);

module.exports = router;
