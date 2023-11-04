const pool = require('./conecction');

async function getSportByName(namesport){
    return await pool.query('SELECT * FROM sport WHERE sport.namesport = $1',[namesport]);
}

async function getSportById(id){
    return await pool.query('SELECT * FROM sport WHERE sport.cod_sport = $1',[id]);
}

async function registerSport(namesport, description){
    return await pool.query('INSERT INTO sport (namesport, description) VALUES ($1, $2)',[namesport, description]);
}

module.exports = {getSportByName, registerSport, getSportById}