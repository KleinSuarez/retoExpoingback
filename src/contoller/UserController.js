const users = require('../database/Repository');
const encrypt = require('../util/crypto/util.crypto')

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
    const encrypted = encrypt.encryptPassword(password);
    const value = await users.findUserByEmailAndPassword(email, encrypted);
    console.log(value)
    if (value.rows.length === 0){
        await users.registerUser(name, email, encrypted)
        res.status(201).json({message: 'Register'});
    }else{
        res.status(400).json({message: 'Data duplicate'})
    }
};

const loginUser = async(req, res) => {
    const {email, password} = req.body;
    const value = await users.findUserByEmailAndPassword(email, password);
    if (value.rows.length === 0){
        res.status(401).json({message: 'No privileges'})
    }else{
        res.status(200).json(value.rows);
    }    
};

module.exports = {get, registerUser, loginUser}