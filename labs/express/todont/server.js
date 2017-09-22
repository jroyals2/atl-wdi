const express = require('express');
const app = express();
const hbs = require('hbs');
const PORT = 3000;
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const todontsController = require('./controllers/todonts')

app.use(methodOverride('_method'));


app.set('view engine', "hbs");
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use("/todonts", todontsController)



app.listen(PORT, () => {
    console.log('express is listening')
})