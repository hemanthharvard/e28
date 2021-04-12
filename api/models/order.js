const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    'created' : Date,
    'updated' : Date,
    'orderName': {type: String, required: true},
    'orderDescription': String,
    'orderType': {type: String, required: true},
    'sandwichName': String,
    'breadType': String,
    'snackName': String,
    'drinkName': String,
    'drinkSize': String
},
{
    strict: true
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;