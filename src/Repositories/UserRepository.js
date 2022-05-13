const DB = require('../database/database');
const User = require('../Models/User');
const UserRepository = {
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            DB.query(`SELECT * FROM users WHERE email = ?`, [
                email
            ], (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results.length > 0 ? new User(results[0]) : null);
            });
        });
    },
    create: (name, email, password) => {
        return new Promise((resolve, reject) => {
            DB.query(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [
                name,
                email,
                password
            ], (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }
}

module.exports = UserRepository;