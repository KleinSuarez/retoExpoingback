const pool = require('./conecction');
 
async function getData(){
    return await pool.query('SELECT * FROM users');
}

async function registerUser(name, email, password){
    return await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',[name, email, password]);
}

async function findUserByEmailAndPassword(email, password){
    return await pool.query('SELECT id, name, email FROM users WHERE users.email = $1 and users.password = $2',[email, password]);
}

module.exports = {getData, registerUser, findUserByEmailAndPassword}