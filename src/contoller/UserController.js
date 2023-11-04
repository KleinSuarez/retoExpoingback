const users = require('../database/repository');

const get = async(req, res) => {
    const data = await users.getData()
    //data.getData().then(  (value)=>(
//console.log(value)
    //))
    // console.log(data);
    // console.log(req)
    // console.log(res)
    // console.log(users)
    res.json(data.rows);
};

const registerUser = async(req, res) => {
    const {name, email, password} = req.body;
    const data = await users.registerUser(name, email, password)
    res.status(201).json({message: 'Register'});
};

module.exports = {get}