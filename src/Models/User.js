class User {
    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.email = row.email;
        this.password = row.password;
        this.createdAt = row.created_at;
        this.updatedAt = row.updated_at;
    }
}

module.exports = User;