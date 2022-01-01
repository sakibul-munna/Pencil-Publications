const mongoose = require("mongoose");
const Joi = require("joi");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
});

const Author = mongoose.model("Author", authorSchema);

function ValidateAuthor(author) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(author);
}

module.exports.authorSchema = authorSchema;
module.exports.Author = Author;
module.exports.validateAuthor = ValidateAuthor;
