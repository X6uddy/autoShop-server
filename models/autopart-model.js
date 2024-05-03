const {Schema, model} = require('mongoose');

const AutopartSchema = new Schema({
    autopartId: {type: String, unique: true, required: true},
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    quantitOnHand: {type: Number, required: true},
    price: {type: Number, required: true},
    weight: {type: Number, required: true},
    compatability: [{type: String, required: true}],
    description: {type: String, required: true}
})

module.exports = model('Autopart', AutopartSchema);