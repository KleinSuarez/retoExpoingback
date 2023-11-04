const {Pool} = require('pg');
const {config} = require('dotenv');

config();

async function cone(){
    const pool = await new Pool({
        connectionString : process.env.DATABASE_URL,
        ssl: true
    });
    console.log(pool)
    return pool;
}

async function getData(){
    const pool = cone()
    const cliente = pool.conect();
    return await cliente.query('SELECT * FROM users');
}

module.exports = getData;