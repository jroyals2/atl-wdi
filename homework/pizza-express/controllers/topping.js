const express = require('express');
const router = express.Router();

router.get('/:choice', (req, res) => {
    let topping =`${req.params.choice} is a delicious choice`;
    res.render("toppings", {
       topping: topping
    }); 
});

module.exports = router;