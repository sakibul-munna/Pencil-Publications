const express = require("express");
const router = express.Router();
const { toBengaliNumber } = require("bengali-number");

const { Book, validateBook } = require("../models/book");

router.get("/", async (req, res) => {
  const books = await Book.find().sort("-publishedYear");
  res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).send("The book with the given ID was not found!");
  }
  res.send(book);
});

router.post("/", async (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const price = toBengaliNumber(req.body.price).toString();
  const pageNumber = toBengaliNumber(req.body.pageNumber).toString();
  const publishedYear = toBengaliNumber(req.body.publishedYear).toString();

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    type: req.body.type,
    price: price,
    pageNumber: pageNumber,
    publishedYear: publishedYear,
  });
  try {
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const price = toBengaliNumber(req.body.price).toString();
  const pageNumber = toBengaliNumber(req.body.pageNumber).toString();
  const publishedYear = toBengaliNumber(req.body.publishedYear).toString();

  const book = await Book.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      author: req.body.author,
      type: req.body.type,
      price: price,
      pageNumber: pageNumber,
      publishedYear: publishedYear,
    },
    { new: true }
  );
  if (!book) {
    return res.status(404).send("The book with the given ID was not found!");
  }

  res.send(book);
});

router.delete("/:id", async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  if (!book) {
    return res.status(404).send("The book with the given ID was not found!");
  }
  res.send(book);
});

module.exports = router;
