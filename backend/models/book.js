const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("./genre");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
  },
  genre: {
    type: genreSchema,
    required: true,
  },
  price: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
  },
  pageNumber: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
  },
  publishedYear: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

function validateBook(book) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    genreId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    publishedYear: Joi.number().min(2019).required(),
    pageNumber: Joi.number().min(1).required(),
  });

  return schema.validate(book);
}

module.exports.bookSchema = bookSchema;
module.exports.Book = Book;
module.exports.validateBook = validateBook;
