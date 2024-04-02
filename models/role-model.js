const {Schema, model} = require('mongoose');

const RoleSchema = new Schema({
    email: {type: String, unique: true, required: true, ref: "User"},
    value: {type: String, unique: true, default: "USER"}
})

module.exports = model('Role', RoleSchema);