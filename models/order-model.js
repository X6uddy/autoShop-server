const {Schema, model} = require('mongoose');

const OrderSchema = new Schema({
    email: {type: String, required: true},
    purchasedAutoParts: [{type: String, ref: 'Autopart'}],
    orderTime: {type: Date, default: Date.now}
})

module.exports = model('Order', OrderSchema);