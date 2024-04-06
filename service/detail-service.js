const AutopartModel = require('../models/autopart-model');

class DetailService {
    async getAllAutoparts () {
        const details = AutopartModel.find();
        return details;
    }
    async getAutopartById (detailId) {
        const details = AutopartModel.findById({detailId});
        return details;
    }
    async createNewAutopart (newAutopart) {
        const newDetail = AutopartModel.create(...newAutopart);
        return newDetail;
    }
}

module.exports = new DetailService();