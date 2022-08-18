require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
/**Aqui invocamos a las rutas */
app.use("/api", require("./routes"));  //localhost/api/_____

app.listen( port , () =>{
    console.log('La app esta lista por http://localhost:'+port);
})
dbConnect();