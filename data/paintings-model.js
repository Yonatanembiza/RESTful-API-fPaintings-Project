require("dotenv").config();
const mongoose= require("mongoose");
const { object } = require("webidl-conversions");
 
const firstDisplayedSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    }
});
const currentDisplayedSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    }
})
const meseumSchema= mongoose.Schema({
    firstDisplayed: firstDisplayedSchema,
    secondDisplayed: currentDisplayedSchema
}, {_id: false})
const paintingSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: false,    
    },
    museum: meseumSchema
});

//  fter defining the schema and applying validating rules to the data we compile as follows 
mongoose.model(process.env.PAINTING_MODEL, paintingSchema, "paintings")