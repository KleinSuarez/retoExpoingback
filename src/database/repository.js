const pool = require('./conecction');
 
async function getData(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    return await pool.query('SELECT * FROM users');
    // console.log(value.then(  (rows)=>(
    //     console.log(rows)
    //         )))
}

async function registerUser(name, email, password){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    return await pool.query('INSERT INTO users (name, email, password)',[name, email, password]);
}

module.exports = {getData, registerUser};