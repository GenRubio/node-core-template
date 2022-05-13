const jwt = require('jsonwebtoken');
const JwtTestController = {
    test: (req, res) => {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.send(authData);
            }
        });
    }
}

module.exports = JwtTestController;