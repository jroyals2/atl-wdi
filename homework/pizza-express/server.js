const express = require("express");
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");


const PORT = 3000;
app.listen(PORT, () => {
    console.log('express is listening on port', PORT);
})