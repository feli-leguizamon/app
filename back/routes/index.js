const express = require("express");
const router = express.Router();
const { User, Car } = require("../db/models");

//users

router.get("/users", (req, res, next) => {
  User.findAll().then((users) => res.send(users));
});

router.post("/users", (req, res, next) => {
  User.create(req.body).then(() => res.send("usuario creado"));
});

router.get("/users/:id", (req, res, next) => {
  User.findByPk(req.params.id, {include: Car}).then((user) => res.send(user));
});

//cars

router.get("/cars", (req, res, next) => {
  Car.findAll()
    .then((car) => res.send(car))
    .catch((e) => console.log(e));
});

// { marca: 'Auto de Julia', userValue: '1' }
router.post("/cars", (req, res) => {
  User.findByPk(Number(req.body.userValue))
    .then((user) => {
      if (!user) return res.status(404).send("Seleccione un usuario");
      const owner = {
        name: user.name,
      };

      Car.create(req.body)
        .then((car) => car.setUser(user))
        .then((car) => res.send({ ...car.dataValues, user: owner }))
    })
    .catch((e) => console.log(e));
});

router.get("/cars/:id", (req, res, next) => {
  Car.findByPk(req.params.id, {include: User})
    .then((car) => res.send(car))
    .catch((e) => console.log(e));
});

module.exports = router;
