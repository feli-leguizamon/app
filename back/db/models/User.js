const db = require("../db");
const S = require("sequelize");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
    },
    lastname: {
      type: S.STRING,
    },
    birthday: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
