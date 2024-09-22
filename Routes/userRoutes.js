const express = require("express");
const { getAllUsers, getUserById } = require("../API/Users/get");
const { authMiddleWare } = require("../API/Authentication/Auth");

const userRoutes = express.Router();

userRoutes.get('/all', authMiddleWare, getAllUsers);
userRoutes.get('/byId/:id', authMiddleWare, getUserById);

module.exports = userRoutes;