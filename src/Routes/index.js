const { Router } = require('express');
const Route = Router();
const verifyToken = require('../Utils/JWTVerifyToken');
const HomeController = require('../Controllers/Api/HomeController');
const RegisterController = require('../Controllers/Auth/RegisterController');
const LoginController = require('../Controllers/Auth/LoginController');
const JwtTestController = require('../Controllers/Api/JwtTestController');

Route.get('/', (req, res) => {
    return HomeController.index(req, res);
});

Route.post('/api/register', (req, res) => {
    return RegisterController.index(req, res);
});

Route.post('/api/login', (req, res) => {
    return LoginController.login(req, res);
});

Route.post('/api/jwt-test', verifyToken, (req, res) => {
    return JwtTestController.test(req, res);
});

module.exports = Route;