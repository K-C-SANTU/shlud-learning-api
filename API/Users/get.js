const UserCrud = require("../../CRUD/userCrud");

async function getAllUsers(req, res) {
    res.send(await UserCrud.getUsers());
}

async function getUserById(req, res) {
    try {
        res.send(await UserCrud.getUserById(req.params.id));
    } catch (error) {
        res.status(404).send("Record not found")
    }
}

module.exports = { getAllUsers, getUserById }