const express = require('express');
const router = express.Router();
const todonts = require("../models/data");


// INDEX
router.get("/", (req, res) => {
    res.render("todonts/index", {
        todonts: todonts.seededToDonts
    })
})

// NEW
router.get('/new', (req, res) => {
    res.render('todonts/new');
})

// SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todont = todonts.seededToDonts[id];
    res.render('todonts/show', {todont})
})

// EDIT
router.get('/:id/edit', (req, res) => {
    res.render('todonts/edit', {
        todonts: {
            id: req.params.id,
            description: todonts.seededToDonts[req.params.id].description,
            urgent: todonts.seededToDonts[req.params.id].urgent
        }
    })
})
// UPDATE
router.put('/:id', function(req, res) {
    var todontsToEdit = todonts.seededToDonts[req.params.id];
  
    todontsToEdit.description = req.body.description;
    todontsToEdit.urgent = req.body.urgent;
  
    res.redirect('/todonts');
  })
  
// DESTROY
router.delete('/:id', (req, res) => {
    todonts.seededToDonts.splice(req.params.id, 1);
    res.redirect('/todonts');
})

// POST
router.post('/', (req, res) => {
console.log(req.body);
const newToDont = req.body;
todonts.seededToDonts.push(newToDont);
res.redirect('/todonts');
})



module.exports = router;