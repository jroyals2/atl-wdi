const express = require('express')
const router = express.Router();

router.get('/:amount/:size', (req, res) => {
    let order =   `Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute`;
    res.render("order", {
      order: order
    });
});



module.exports = router;