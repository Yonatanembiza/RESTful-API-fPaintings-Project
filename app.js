require("dotenv").config();
const path= require("path");
require("./data/db");
const express= require("express");

const routes= require("./routes");

// creat app
const app= express();

// create middlewares
app.use(express.json());

// middleware for logging
app.use(function (req, res, next){
    console.log(req.method, req.url);
});

// middle for the routes and defining the sub-route 
// app.use("/api", routes);

// create the server 
const server= app.listen(process.env.PORT, function(){
    console.log(process.env.SERVER_START_MESSAGE, server.address().port);
});