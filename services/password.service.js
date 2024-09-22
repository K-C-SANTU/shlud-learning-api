const bcrypt = require('bcrypt');
const encryptCode = +process.env.ENCRYPT_CODE;
async function encryptText(planText) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(planText, encryptCode, function (err, hash) {
            if (err) reject(err);
            resolve(hash);
        })
    })
}
async function compareText(planText, hashText) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(planText, hashText, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = { encryptText, compareText }