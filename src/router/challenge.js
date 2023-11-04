const {getChallengeByName, getAllChallenge} = require('../contoller/ChallengeController');
const {Router} = require('express');
const routerChallenge = Router();

routerChallenge.get('/challenge/:name', getChallengeByName)
routerChallenge.get('/challenge', getAllChallenge)

module.exports = routerChallenge;