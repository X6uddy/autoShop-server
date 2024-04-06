const UserService = require('../service/user-service');
const DetailService = require('../service/detail-service');

class AutopartController {
    async createNewAutopart(req, res, next) {
        try {
            const {newAutopart} = req.body;
            const newDetail = await DetailService.makeNewOrder(newAutopart);
            return res.json(newDetail);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AutopartController();