const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    'created': Date,
    'updated': Date,
    'username': {
        type: String,
        required: true
    },
    'password': String,
}, {
    strict: true,
    timestamps: true
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;