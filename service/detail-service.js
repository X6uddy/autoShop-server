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
}

module.exports = new DetailService();