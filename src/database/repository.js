const pool = require('./conecction');
 
async function getData(){
    const cliente = pool.conect();
    return await cliente.query('SELECT * FROM users');
}

module.exports = {getData};