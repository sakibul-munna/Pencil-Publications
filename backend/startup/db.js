const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to ${db} database...`);
    })
    .catch((ex) => {
      console.log("Could Not Connect to MongoDB..." + ex);
    });
};
