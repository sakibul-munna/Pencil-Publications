const express = require("express");
const genres = require("../routes/genres");
const books = require("../routes/books");
const authors = require("../routes/authors");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/books", books);
  app.use("/api/authors", authors);
};
