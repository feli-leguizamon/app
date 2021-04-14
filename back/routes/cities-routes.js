const express = require("express");
const router = express.Router();
const { City, User } = require("../db/models");

router.get("/", (req, res, next) => {
  City.findAll()
    .then((car) => res.send(car))
    .catch(() => res.sendStatus(400));
});

router.post("/", (req, res, next) => {
  City.create(req.body)
    .then((city) => res.send(city))
    .catch(() => res.sendStatus(400));
});

router.get("/:id", (req, res, next) => {
  City.findByPk(req.params.id)
    .then((city) => res.send(city))
    .catch(() => res.sendStatus(400));
});

module.exports = router;
