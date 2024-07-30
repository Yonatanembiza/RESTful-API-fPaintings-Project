const paintingController= require("../controllers/paintings.controller")
const express= require("express");
const router= express.Router();

router.route("/paintings")
    .get(paintingController.getAll);


module.exports= router;