const customHeader = ( req, res, next ) => {
    try {
        const apiKey = req.headers.api_key;
        if(apiKey === 'evan-01'){
            next();
        }else{
            res.status(403);
            res.send({error: "API_KEY_NO_ES_CORRECTA"})
        }
    } catch (error) {
        res.status(403)
        res.send({error: "ALGO_OCURRIÓ_EN_EL_CUSTOM_HEADER"})
    }
}

module.exports = customHeader;