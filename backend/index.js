const express = require("express");
const app = express();
const winston = require("winston");

require("./startup/config")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/logging")();
require("./startup/objIdValidation")();

app.get("/", (req, res) => {
  res.send("Welcome to Pencil Publications Backend !!!");
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  winston.info(`Listening on Port ${port}...`);
});

module.exports = server;
