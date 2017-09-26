//requirements: require mongoose
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//create your donut schema:
const Schema = mongoose.Schema;

const newDonuts = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const DonutModel = mongoose.model('Donuts', newDonuts)

module.exports ={
    DonutModel: DonutModel
}
//export your donut with module.exports()
