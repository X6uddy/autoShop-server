const OrderModel = require('../models/order-model');
const UserModel = require('../models/user-model');

const uuid = require('uuid');

class OrderService {
    async getAllOrders () {
        const orders = OrderModel.find();
        return orders;
    }
    async getOrdersById (userId) {
        const orders = OrderModel.find({userId});
        return orders
    }
    async makeNewOrder (purchasedAutoParts, userId) {
        const now = new Date();
        const orderTime = now.toISOString();
        const orderId = uuid.v4();
        const order = await OrderModel.create({orderId, userId, purchasedAutoParts, orderTime});
        return order
    }
}

module.exports = new OrderService();