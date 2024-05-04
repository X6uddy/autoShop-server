const UserModel = require('../models/user-model');
const OrderService = require('../service/order-service');

class OrderController {
    async makeNewOrder(req, res, next) {
        try {
            const {purchasedAutoParts, userId} = req.body;
            const order = await OrderService.makeNewOrder(purchasedAutoParts, userId);
            return res.json(order);
        } catch (e) {
            next(e)
        }
    }
    async getAllOrders(req, res, next) {
        try {
            const orders = await OrderService.getAllOrders()
            return res.json(orders)
        } catch (e) {
            next(e)
        }
    }
    async getOrdersById(req, res, next) {
        try {
            const {userId} = req.body;
            const orders = await OrderService.getOrdersById(userId)
            return res.json(orders)
        } catch (e) {
            next(e)
        }
    }
    async statusСhange(req, res, next) {
        try {
            const {orderId, newStatus} = req.body;
            const order = await OrderService.statusСhange(orderId, newStatus)
            return res.json(order)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new OrderController();