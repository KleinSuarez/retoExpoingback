const users = require('../database/conecction');

const get = async(req, res) => {
    const data = users
    console.log(data.rows);
    return res.send('users');
};

module.exports = {get}