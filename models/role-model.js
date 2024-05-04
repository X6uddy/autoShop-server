const {Schema, model} = require('mongoose');

const RoleSchema = new Schema({
    email: {type: String, required: true},
    value: {type: String, default: "USER"}
})

module.exports = model('Role', RoleSchema);