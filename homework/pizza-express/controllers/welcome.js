const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    let str = "Welcome to Pizza Express!!";
    res.render("index", {
        welcome: str
});
});
module.exports = router;