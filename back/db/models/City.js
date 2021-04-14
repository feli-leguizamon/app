const db = require("../db");
const S = require("sequelize");

class City extends S.Model {}

City.init(
  {
    name: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
    },
  },
  { sequelize: db, modelName: "city" }
);

module.exports = City;
