const userCrud = require("../../CRUD/userCrud");
const { create_JWT_Token, verify_JWT_Token } = require("../../services/auth.token.service");
const { encryptText, compareText } = require("../../services/password.service");
async function registerUser(req, res) {
    const { userName, email, password, active } = req.body;
    try {
        const checkUser = await userCrud.getUserCountByEmail(email);
        if (checkUser) {
            res.status(409).send('user alread exist');
        } else {
            const hashPassword = await encryptText(password);
            const response = await userCrud.addUser(userName, email, hashPassword, active)
            res.status(201).send(response);
        }
    } catch (error) {
        res.status(406).send(error.message);
    }
}
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await userCrud.getUserByEmailId(email);
        if (!user) {
            res.status(404).send("User not registered");
        } else {
            const compareResponse = await compareText(password, user.password);
            if (compareResponse) {
                if (!user.active) {
                    res.status(401).send('User Account inactive, please contact admin');
                } else {
                    const token = await create_JWT_Token({ ...user._doc, _id: user._id.valueOf() });
                    res.status(200)
                        .send(
                            {
                                message: 'Login Successfull',
                                data: user,
                                token
                            }
                        )
                }
            } else {
                res.status(401).send('Invalid Credentials');
            }
        }
    } catch (error) {
        res.status(406).send(error.message);
    }
}
async function authMiddleWare(req, res, next) {
    const token = req?.headers?.authorization?.split?.('Bearer ')?.[1];
    if (token) {
        try {
            const user = await verify_JWT_Token(token);
            if (user) {
                // req['user'] = user;
                next();
            } else {
                res.status(401).send('Unauthorized Access')
            }
        } catch (error) {
            res.status(401).send('Unauthorized Access')
        }

    } else {
        res.status(401).send('Unauthorized Access')
    }
}
module.exports = { registerUser, login, authMiddleWare }