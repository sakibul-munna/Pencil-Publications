const express = require("express");
const router = express.Router();

const { Genre, validateGenre } = require("../models/genre");

const inputValidator = require("../middleware/inputValidator");

const auth = require("../middleware/auth");
const objIdValidation = require("../middleware/objIdValidation");

router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

router.get("/:id", objIdValidation, async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  if (!genre) {
    return res.status(404).send("The genre with the given ID was not found!");
  }
  res.send(genre);
});

router.post("/", [auth, inputValidator(validateGenre)], async (req, res) => {
  let genre = new Genre({ name: req.body.name });
  try {
    genre = await genre.save();
    res.send(genre);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put(
  "/:id",
  [auth, objIdValidation, inputValidator(validateGenre)],
  async (req, res) => {
    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!genre) {
      return res.status(404).send("The genre with the given ID was not found!");
    }

    res.send(genre);
  }
);

router.delete("/:id", [auth, objIdValidation], async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);
  if (!genre) {
    return res.status(404).send("The genre with the given ID was not found!");
  }
  res.send(genre);
});

module.exports = router;
