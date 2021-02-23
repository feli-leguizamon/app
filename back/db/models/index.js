const Car = require("./Car")
const User = require("./User")

Car.belongsTo(User)
User.hasMany(Car)

module.exports = {Car, User}