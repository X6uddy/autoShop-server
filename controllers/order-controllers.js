const UserService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exeptions/api-error');
const OrderServise = require('../service/order-servise');

class OrderController {
    async makeNewOrder(req, res, next) {
        try {
            const {details, login} = req.body;
            const order = await OrderServise.makeNewOrder(details, login);
            return res.json(order);
        } catch (e) {
            next(e)
        }
    }
    async getAllOrders(req, res, next) {
        try {
            const orders = await OrderServise.getAllOrders()
            return res.json(orders)
        } catch (e) {
            next(e)
        }
    }
    async getOrdersById(req, res, next) {
        try {
            const {login} = req.body;
            const orders = await OrderServise.getOrdersById(login)
            return res.json(orders)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new OrderController();