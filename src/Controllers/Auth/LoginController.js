const jwt = require('jsonwebtoken');
const UserResource = require('../../Resources/UserResource/UserResource');

const LoginController = {
    login: (req, res) => {
        const { email, password } = req.body;
        const UserService = require('../../Services/UserService');
        const UserHelper = require('../../Helpers/UserHelper');

        UserService.getByEmail(email).then(function (user) {
            if (user) {
                UserHelper.comparePassword(password, user.password).then(function (result) {
                    if (result) {
                        jwt.sign({ user }, 'secretkey', (err, token) => {
                            res.status(200).json({
                                message: 'Login successful',
                                data: new UserResource(user),
                                token: token
                            });
                        });
                    } else {
                        res.status(400).json({
                            message: 'Invalid password'
                        });
                    }
                }).catch(function (err) {
                    res.status(500).json({
                        message: err
                    });
                });
                
            } else {
                res.status(400).json({
                    message: 'Email does not exist'
                });
            }
        }).catch(function (err) {
            res.status(500).json({
                message: err
            });
        });
    }
}

module.exports = LoginController;