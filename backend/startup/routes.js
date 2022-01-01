const express = require("express");
const genres = require("../routes/genres");
const books = require("../routes/books");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/books", books);
};
