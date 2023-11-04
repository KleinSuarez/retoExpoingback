const {getSportByName, registerSport} = require('../contoller/SportController');
const {Router} = require('express');
const routerSport = Router();

routerSport.get('/sport/:name', getSportByName)
routerSport.post('/sport/register', registerSport)

module.exports = routerSport;