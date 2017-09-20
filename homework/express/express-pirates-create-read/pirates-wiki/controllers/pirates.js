const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');


// INDEX PIRATES
 router.get("/", (req, res) => {
     res.render("pirates/index", {
         pirates: pirates.seededPirates
     })
 })
 // NEW PIRATES
router.get("/new", (req, res) => {
    res.render('pirates/new');
})


 // SHOW PIRATES
router.get("/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates.seededPirates[id];
    res.render('pirates/show',{
    pirate: pirate
    });
})
 // POST PIRATES

 router.post('/', (req, res) => {
     console.log(req.body);
     const newPirate = req.body;
     pirates.seededPirates.push(newPirate);
     res.redirect('/pirates');

 })


module.exports = router;