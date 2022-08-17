const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtention = (fileName) => {
    return fileName.split('.').shift();
}

const a = fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtention(file);
    if(name != 'index'){
    
        console.log(name);
        router.use(`/${name}`, require(`./${file}`));
    }
});

module.exports = router;