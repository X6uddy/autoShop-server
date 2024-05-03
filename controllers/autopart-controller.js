const AutopartService = require('../service/autopart-service');

class AutopartController {
    async createNewAutopart(req, res, next) {
        try {
            const {title, imageUrl, quantitOnHand, price, weight, compatability, description} = req.body;
            const newDetail = await AutopartService.createNewAutopart(title, imageUrl, quantitOnHand, price, weight, compatability, description);
            console.log(newDetail)
            return res.json(newDetail);
        } catch (e) {
            next(e)
        }
    }
    async getAutopartById(req, res, next) {
        try {
            const {autopartId} = req.body;
            const autopart = await AutopartService.getAutopartById(autopartId);
            return res.json(autopart)
        } catch (e) {
            next(e)
        }
    }

    async getAllAutoparts(req, res, next) {
        try {
            const autoparts = await AutopartService.getAllAutoparts();
            console.log('newDetail,', autoparts)
            return res.json(autoparts)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AutopartController();