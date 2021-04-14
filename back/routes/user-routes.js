const express = require("express");
const router = express.Router();
const { User, City } = require("../db/models");

router.get("/", (req, res, next) => {
  User.findAll({ include: City })
    .then((users) => res.send(users))
    .catch(() => res.sendStatus(400));
});

router.post("/", (req, res, next) => {
  City.findByPk(Number(req.body.cityId))
    .then((city) => {
      if (!city) return res.status(404).send("Seleccione una ciudad");
      const ciudad = {
        name: city.name,
      };

      User.create(req.body)
        .then((user) => user.setCity(city))
        .then((user) => res.send({ ...user.dataValues, city: ciudad }));
    })
    .catch(() => res.sendStatus(400));
});

router.get("/:id", (req, res, next) => {
  User.findByPk(req.params.id, { include: City })
    .then((user) => res.send(user))
    .catch(() => res.sendStatus(400));
});

router.put("/:id", (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      user.update(req.body);
      res.send("usuario actualizado");
    })
    .catch(() => res.sendStatus(400));
});

router.delete("/:id", (req, res, next) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.send("usuario eliminado"))
    .catch(() => res.sendStatus(400));
});

module.exports = router;
