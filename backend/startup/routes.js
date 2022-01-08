const express = require("express");
const genres = require("../routes/genres");
const books = require("../routes/books");
const authors = require("../routes/authors");
const admins = require("../routes/admins");
const auth = require("../routes/auth");
const errorHandler = require("../middleware/errorHandler");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/books", books);
  app.use("/api/authors", authors);
  app.use("/api/admins", admins);
  app.use("/api/auth", auth);
  app.use(errorHandler);
};
