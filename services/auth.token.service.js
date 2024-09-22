const jwt = require('jsonwebtoken');
const secreatCode = process.env.TOKEN_SECRET_CODE;
const expirationTime = +process.env.TOKEN_EXPIRATION;

function create_JWT_Token(payload) {
    return new Promise(
        async (resolve, reject) => {
            try {
                const token = await jwt.sign(payload, secreatCode, { expiresIn: expirationTime });
                resolve(token);
            } catch (error) {
                reject(error);
            }
        }
    )
}

function verify_JWT_Token(token) {
    return new Promise(
        (resolve, reject) => {
            try {
                jwt.verify(token, secreatCode, function (err, decoded) {
                    if (err) {
                        reject(false)
                    }
                    resolve(decoded);
                })
            } catch (error) {
                reject(false)
            }
        }
    )
}

module.exports = { create_JWT_Token, verify_JWT_Token }