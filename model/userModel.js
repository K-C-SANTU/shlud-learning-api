const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    userName: String,
    password: String,
    active: Boolean,
    email: String
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
