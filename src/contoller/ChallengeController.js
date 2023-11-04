const challenges = require('../database/repositoryChallenge');
const sports = require('../database/repositorySport');


const getChallengeByName = async(req, res) => {
    const namechallenge = req.params.name
    const data = await challenges.getChallengeByName(namechallenge)
    miFuncionAsincrona(data.rows);
    console.log(data.rows)
    res.json(data.rows);  
};

async function miFuncionAsincrona(data) {
    for (let obj of data) {
        let objRelation = await sports.getSportById(obj.cod_sport);
        obj.cod_sport = objRelation;
    }
}

const getAllChallenge = async(req, res) => {
    const data = await challenges.getAllChallenge()
    res.json(data.rows);
};


module.exports = {getChallengeByName, getAllChallenge}