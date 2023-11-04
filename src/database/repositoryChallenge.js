const pool = require('./conecction');

async function getChallengeByName(namechallenge){
    return await pool.query('SELECT * FROM challenge JOIN sport ON challenge.cod_sport =  WHERE challenge.namechallenge = $1',[namechallenge]);
}

async function getAllChallenge(){
    return await pool.query('SELECT * FROM challenge');
}

module.exports = {getChallengeByName, getAllChallenge}