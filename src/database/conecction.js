const {Pool, Client} = require('pg');
const {config} = require('dotenv');

config();


// user?: string | undefined;
// database?: string | undefined;
// port: number;
// host: string;
// password?: string | undefined;
// ssl: boolean;


console.log()
const pool = new Client({
    ssl: true,
    port : 5432,
    host : 'dpg-cl35ll9novjs73bc6vdg-a.ohio-postgres.render.com',
    user : 'nameundefined',
    password : 'Qrdq9zywOXccs5B9EwbXOpZHUTiMa9YQ', 
    database : 'expinge_9ti0'
});

pool.connect()

module.exports = pool;