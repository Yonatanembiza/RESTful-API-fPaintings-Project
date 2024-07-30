require("dotenv").config();
const mongoose= require("mongoose");
const Painting= mongoose.model(process.env.PAINTING_MODEL);

const getAll= function(req, res){
    console.log("In getall");
    let offset= process.env.OFFSET;
    let count= process.env.COUNT;

    if(req.query && req.query.offset){
        offset= parseInt(req.query.offset, 10);
    }
    if(req.query && req.query.count){
        count= parseInt(req.query.count, 10);
    }

    Painting.find().skip(offset).limit(count).exec(function(error, paintings){
        console.log("Paintings found", paintings.length);
        res.json(paintings);
    });
}
const getOne= function(req, res){
    const paintingId= req.params.paintingId;
    Painting.findById(paintingId).exec(function(error, painting){
        res.status(200).json(painting);
    })
}

module.exports= {
    getAll: getAll,
    getOne: getOne
}