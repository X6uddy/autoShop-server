const {Schema, model} = require('mongoose');

const DetailSchema = new Schema({
    quantitOnHand: {type: Number, required: true},
    price: {type: Number, required: true},
    weight: {type: Number, required: true},
    compatability: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = model('Role', DetailSchema);