const express = require("express");
const router = express.Router();
const { toBengaliNumber } = require("bengali-number");

const { Book, validateBook } = require("../models/book");
const { Genre } = require("../models/genre");

const inputValidator = require("../middleware/inputValidator");

const auth = require("../middleware/auth");
const objIdValidation = require("../middleware/objIdValidation");

router.get("/", async (req, res) => {
  const books = await Book.find().sort("-publishedYear");
  res.send(books);
});

router.get("/:id", objIdValidation, async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).send("The book with the given ID was not found!");
  }
  res.send(book);
});

router.post("/", [auth, inputValidator(validateBook)], async (req, res) => {
  const price = toBengaliNumber(req.body.price).toString();
  const pageNumber = toBengaliNumber(req.body.pageNumber).toString();
  const publishedYear = toBengaliNumber(req.body.publishedYear).toString();

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) {
    return res.status(404).send("Invalid Genre");
  }

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
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

router.put(
  "/:id",
  [auth, objIdValidation, inputValidator(validateBook)],
  async (req, res) => {
    const price = toBengaliNumber(req.body.price).toString();
    const pageNumber = toBengaliNumber(req.body.pageNumber).toString();
    const publishedYear = toBengaliNumber(req.body.publishedYear).toString();
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) {
      return res.status(404).send("Invalid Genre");
    }

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          author: req.body.author,
          genre: {
            _id: genre._id,
            name: genre.name,
          },
          price: price,
          pageNumber: pageNumber,
          publishedYear: publishedYear,
        },
      },
      { new: true }
    );
    if (!book) {
      return res.status(404).send("The book with the given ID was not found!");
    }

    res.send(book);
  }
);

router.delete("/:id", [auth, objIdValidation], async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  if (!book) {
    return res.status(404).send("The book with the given ID was not found!");
  }
  res.send(book);
});

module.exports = router;
