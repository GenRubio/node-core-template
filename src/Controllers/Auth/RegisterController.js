const RegisterController = {
    index: (req, res) => {
        const { name, email, password } = req.body;
        const UserService = require('../../Services/UserService');

        UserService.getByEmail(email).then(function (user) {
            if (user) {
                res.status(400).json({
                    message: 'Email already exists'
                });
            } else {
                UserService.create(name, email, password).then(function () {
                    res.status(201).json({
                        message: 'User created successfully'
                    });
                }).catch(function (err) {
                    res.status(500).send(err);
                });
            }
        }).catch(function (err) {
            res.status(500).json({
                message: err
            });
        });
    }
}

module.exports = RegisterController;