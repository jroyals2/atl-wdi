const express = require("express");
const app = express();
const hbs = require('hbs');

const welcomeController = require('./controllers/welcome.js');
const orderController = require('./controllers/order.js');
const toppingController = require('./controllers/topping.js');
const randomController = require('./controllers/random.js');
app.set("view engine", "hbs");

app.use('/', welcomeController);
app.use('/order', orderController);
app.use('/topping', toppingController);
app.use('*', randomController);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('express is listening on port', PORT);
})