const User = require("../model/userModel");

async function addUser(userName, email, password, active) {
    const addUserObj = new User({
        active,
        email,
        userName,
        password
    })
    try {
        return await addUserObj.save();
    } catch (error) {
        throw new Error(error?.message);
    }
}
async function getUsers() {
    try {
        return await User.find();
    } catch (error) {
        throw new Error(error?.message);
    }
}
async function getUserById(id) {
    try {
        return await User.findById(id);
    } catch (error) {
        throw new Error(error?.message);
    }
}
async function getUserCountByEmail(email) {
    try {
        return await User.countDocuments({ email });
    } catch (error) {
        return false;
    }
}
async function getUserByEmailId(email) {
    try {
        return await User.findOne({ email });
    } catch (error) {
        return false;
    }
}
const userCrud = { addUser, getUsers, getUserById, getUserByEmailId, getUserCountByEmail };

module.exports = userCrud;