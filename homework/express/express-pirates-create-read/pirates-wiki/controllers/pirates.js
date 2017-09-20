const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');


// INDEX PIRATES
 router.get("/index", (req, res) => {
     res.render("pirates/index", {
         pirates: pirates.seededPirates
     })
 })
 // NEW PIRATES

 // SHOW PIRATES
router.get("/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates.seededPirates[id];
    res.render('pirates/show',{pirate});
})
 // POST PIRATES


module.exports = router;