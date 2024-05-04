const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    userId: {type: String, required: true},
    password: {type: String, required: true},
    balance: {type: Number, default: 100},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', UserSchema);