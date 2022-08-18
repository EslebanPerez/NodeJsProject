const express = require('express');
const router = express.Router();
const {getItems, getItem} = require('../controllers/tracks')

//Aqui se creara la ruta de acceso http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", getItems)

router.get("/:id", getItem);

module.exports = router;
