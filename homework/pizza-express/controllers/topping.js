const express = require('express')
const router = express.Router();

router.get('/:choice', (req, res) => {
    res.send(`${req.params.choice} is a delicious choice`);
});

module.exports = router;