const {Router} = require('express');
const {get} = require('../contoller/UserController');
const routerv = Router();

routerv.get('/users', get)

module.exports = routerv;