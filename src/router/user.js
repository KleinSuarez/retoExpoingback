const {Router} = require('express');
const {get, registerUser, loginUser} = require('../contoller/UserController');
const routerv = Router();

routerv.get('/users', get)
routerv.post('/users/register', registerUser)
routerv.post('/users/login', loginUser)

module.exports = routerv;