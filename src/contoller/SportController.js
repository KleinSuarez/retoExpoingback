const sports = require('../database/repositorySport');

const getSportByName = async(req, res) => {
    const nameSport = req.params.name
    const data = await sports.getSportByName(nameSport)
    res.json(data.rows);
};

const registerSport = async(req, res) => {
    const {nameSport, description} = req.body;
    const value = await sports.getSportByName(nameSport)
    if(value.rows.length === 0){
        await sports.registerSport(nameSport, description)
        res.status(201).json('Create sport')
    }else{
        res.status(400).json({message:'Data duplicate'})
    }
}

module.exports = {getSportByName, registerSport}