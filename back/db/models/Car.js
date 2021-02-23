const db = require("../db")
const S = require("sequelize")

class Car extends S.Model{}

Car.init({
    marca: {
        type: S.STRING
    }
}, {sequelize: db, modelName: "car"})

module.exports = Car