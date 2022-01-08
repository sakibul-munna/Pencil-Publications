const winston = require("winston");

function errorHandler(err, req, res, next) {
  winston.error(err.message, err);
  res.status(500).send("Something Failed!");
}

module.exports = errorHandler;
