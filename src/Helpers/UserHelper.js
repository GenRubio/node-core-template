const bcrypt = require("bcrypt");
const UserHelper = {
    hashPassword: (password) => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, function (err, hash) {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    },
    comparePassword: (password, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }
}

module.exports = UserHelper;