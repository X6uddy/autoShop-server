const AutopartModel = require('../models/autopart-model');
const uuid = require('uuid');

class AutopartService {
    async getAllAutoparts () {
        const details = AutopartModel.find().limit(20);
        return details;
    }
    async getAutopartById (autopartId) {
        const details = AutopartModel.find({autopartId});
        return details;
    }
    async createNewAutopart (title, imageUrl, quantitOnHand, price, weight, compatability, description) {
        const autopartId = uuid.v4()
        const newDetail = AutopartModel.create({autopartId, title, imageUrl, quantitOnHand, price, weight, compatability, description});
        return newDetail;
    }
}

module.exports = new AutopartService();