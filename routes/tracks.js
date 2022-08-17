const express = require('express');
const router = express.Router();

//Aqui se creara la ruta de acceso http://localhost/tracks con los metodos GET, POST, DELETE, PUT
router.get("/", (req, res)=>{
    const data = ['Hola', 'Mundo']
    res.send({data})
})

module.exports = router;
