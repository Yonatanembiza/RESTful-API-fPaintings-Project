require("dotenv").config();
require("./data/db");
const routes= require("./routes/index");
const path= require("path");
const express= require("express");

// creat app
const app= express();

// create middlewares
app.use(express.json());

// // middleware for logging
// app.use(function (req, res, next){
//     console.log(req.method, req.url);
// });

// middle for the routes and defining the sub-route 
// app.use("/api", routes);
app.use("/api", routes)

// create the server 
const server= app.listen(process.env.PORT, function(){
    console.log(process.env.SERVER_START_MESSAGE, server.address().port);
});