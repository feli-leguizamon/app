const express = require("express")
const router = express.Router()
const User = require("../db/models/User")

router.get("/users", (req,res, next) => {
    User.findAll()
    .then((users) => res.send(users))
})

router.post("/users", (req, res, next) => {
    User.create(req.body)
    .then(() => res.send("usuario creado"))
})

router.get("/users/:id", (req, res, next) => {
    User.findByPk(req.params.id)
    .then((user) => res.send(user))
})

module.exports = router