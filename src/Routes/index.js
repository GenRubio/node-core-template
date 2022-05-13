const { Router } = require('express');
const route = Router();
const verifyToken = require('../Utils/JWTVerifyToken');
const HomeController = require('../Controllers/Api/HomeController');
const RegisterController = require('../Controllers/Auth/RegisterController');
const LoginController = require('../Controllers/Auth/LoginController');
const JwtTestController = require('../Controllers/Api/JwtTestController');

route.get('/', (req, res) => {
    return HomeController.index(req, res);
});

route.post('/api/register', (req, res) => {
    return RegisterController.index(req, res);
});

route.post('/api/login', (req, res) => {
    return LoginController.login(req, res);
});

route.post('/api/jwt-test', verifyToken, (req, res) => {
    return JwtTestController.test(req, res);
});

module.exports = route;