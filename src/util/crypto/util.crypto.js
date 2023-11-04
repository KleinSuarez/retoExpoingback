const crypto = require('crypto-js')
require('dotenv').config()


const key = crypto.enc.Hex.parse(process.env.KEY);

function encryptPassword(password){
    const encryptedPassword = crypto.SHA256(password)
    var str = encryptedPassword.toString(crypto.enc.Base64)
    return str;
}

module.exports = {encryptPassword}