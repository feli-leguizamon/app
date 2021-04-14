const express = require("express");
const router = express.Router();
const userRoutes = require("./user-routes")
const citiesRoutes = require("./cities-routes")

router.use("/users", userRoutes)
router.use("/city", citiesRoutes)


module.exports = router;
