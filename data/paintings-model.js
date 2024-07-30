const mongoose= require("mongoose");
const { object } = require("webidl-conversions");
 
const firstDisplayedSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
const currentDisplayedSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})
const meseumSchema= mongoose.Schema({
    firstDisplayed: firstDisplayedSchema,
    secondDisplayed: currentDisplayedSchema
})
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
})

//  So here, after defining the schema and applying validating rules to the data we compile as follows 
mongoose.model("Painting", paintingSchema, "paintings")