const mongoose = require("mongoose");

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        auth: {
          username: process.env.COSMOSDB_USER,
          password: process.env.COSMOSDB_PASSWORD
        },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false
      },(err, res)=>{
        if(!err){
            console.log("*** CONEXION CORRECTA ***");
        }else{
            console.log("*** ERROR EN LA CONEXION ***");
        }
    })
}

module.exports = dbConnect;