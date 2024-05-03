const {Schema, model} = require('mongoose');

const OrderSchema = new Schema({
    userId: {type: String, required: true, ref: 'User'},
    orderId: {type: String, required: true},
    purchasedAutoParts: [{type: String, ref: 'Autopart'}],
    orderTime: {type: String, default: Date.now},
    status: {type: String, default: 'not confirmed'}
})

module.exports = model('Order', OrderSchema);