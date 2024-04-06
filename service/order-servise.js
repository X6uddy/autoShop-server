const AutopartModel = require('../models/autopart-model');
const OrderModel = require('../models/order-model');

class OrderServise {
    async getAllOrders () {
        const orders = OrderModel.find();
        return orders;
    }
    async getOrdersById (clientId) {
        const orders = OrderModel.findById({detailId});
        return orders;
    }
    async makeNewOrder (details, login) {
        const orderTime = new Date();
        const order = await OrderModel.create({email: login, purchasedAutoParts: details, orderTime});
        return order;
    }
}

module.exports = new OrderServise();