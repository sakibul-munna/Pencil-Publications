const mongoose = require("mongoose");
const Joi = require("joi");

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
  type: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
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
    type: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
    publishedYear: Joi.number().min(2019).required(),
    pageNumber: Joi.number().min(1).required(),
  });

  return schema.validate(book);
}

module.exports.bookSchema = bookSchema;
module.exports.Book = Book;
module.exports.validateBook = validateBook;
