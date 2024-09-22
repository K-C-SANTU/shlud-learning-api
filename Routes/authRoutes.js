const express = require("express");
const { registerUser, login } = require("../API/Authentication/Auth");

const authRoutes = express.Router();

authRoutes.post('/registration', registerUser);
authRoutes.post('/login', login);

module.exports = authRoutes; 