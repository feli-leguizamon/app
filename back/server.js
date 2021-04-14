const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes");
const db = require("./db/db");
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded());

app.use(morgan("tiny"));

app.use("/api", routes);

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

db.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000...");
  });
});
