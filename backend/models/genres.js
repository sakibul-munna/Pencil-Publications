const mongoose = require("mongoose");
const Joi = require("joi");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

function ValidateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(genre);
}

module.exports.genreSchema = genreSchema;
module.exports.Genre = Genre;
module.exports.validateGenre = ValidateGenre;
