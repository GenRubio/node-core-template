const UserRepository = require('../Repositories/UserRepository');
const UserHelper = require('../Helpers/UserHelper');
const UserService = {
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            UserRepository.getByEmail(email).then(function (user) {
                resolve(user);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    create: (name, email, password) => {
        return new Promise((resolve, reject) => {
            UserHelper.hashPassword(password).then(function (hash) {
                UserRepository.create(name, email, hash).then(function (user) {
                    resolve(user);
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    }
}

module.exports = UserService;