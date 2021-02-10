const db = require("../db")
const S = require("sequelize")

class User extends S.Model{}

User.init({
    name: {
        type: S.STRING
    },
}, {sequelize: db, modelName: "user"})

module.exports = User 