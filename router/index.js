const Router = require('express').Router;
const {body} = require('express-validator');
const UserController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const roleMiddleware = require('../middlewares/role-middleware');
const OrderController = require('../controllers/order-controllers');
const AutopartController = require('../controllers/autopart-controller')

const router = new Router();

router.post('/registration', 
            body('email').isEmail(),
            body('password').isLength({min: 4, max: 20}),
            UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/users', authMiddleware, roleMiddleware(['USER']), UserController.users);
router.get('/orders', authMiddleware, OrderController.getAllOrders);
router.post('/orders/new', authMiddleware, OrderController.makeNewOrder);
router.post('/orders/:id', authMiddleware, OrderController.getOrdersById);
router.patch('/orders/changeStatus', authMiddleware, roleMiddleware(['USER']), OrderController.statusСhange);
router.post('/autoparts/new', AutopartController.createNewAutopart);
router.post('/autoparts/:id', AutopartController.getAutopartById);
router.get('/autoparts', AutopartController.getAllAutoparts);

module.exports = router;
