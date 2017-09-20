const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const PORT = 3000;

const piratesController = require('./controllers/pirates');


 app.set('view engine', 'hbs');
 //app.use('/pirates', piratesController);
 app.use(bodyParser.urlencoded({
     extended: true
   }));
   app.use('/pirates', piratesController);

app.listen(PORT, () => {
    console.log("express is listening.....")
})