require("dotenv").config();
require("./paintings-model");
const mongoose= require("mongoose");

mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
mongoose.connection.on("connected", function() {
    console.log("Mongoose connected to", process.env.DATABASE_NAME);
});
mongoose.connection.on("disconnected", function(){
    console.log("Mongoose disconnected");
});
mongoose.connection.on("error", function(error){
    console.log("Mongoose conncetion error: ", error);
});

process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGINT_MESSAGE);
        process.exit(0);
    });
});
process.on("SIGTERM", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGTERM_MESSAGE);
        process.exit(0);
    });
});
process.once("SIGUSER2", function(){
    mongoose.connection.close(function(){
        console.log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid, "SIGUSER2");
    });
});