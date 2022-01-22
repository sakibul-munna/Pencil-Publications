const express = require("express");
const router = express.Router();

const { Author, validateAuthor } = require("../models/author");

const inputValidator = require("../middleware/inputValidator");

const auth = require("../middleware/auth");
const objIdValidation = require("../middleware/objIdValidation");

router.get("/", async (req, res) => {
  const authors = await Author.find().sort("name");
  res.send(authors);
});

router.get("/:id", objIdValidation, async (req, res) => {
  const author = await Author.findById(req.params.id);
  if (!author) {
    return res.status(404).send("The author with the given ID was not found!");
  }
  res.send(author);
});

router.post("/", [auth, inputValidator(validateAuthor)], async (req, res) => {
  let author = new Author({ name: req.body.name });
  try {
    author = await author.save();
    res.send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put(
  "/:id",
  [auth, objIdValidation, inputValidator(validateAuthor)],
  async (req, res) => {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!author) {
      return res
        .status(404)
        .send("The author with the given ID was not found!");
    }

    res.send(author);
  }
);

router.delete("/:id", [auth, objIdValidation], async (req, res) => {
  const author = await Author.findByIdAndRemove(req.params.id);
  if (!author) {
    return res.status(404).send("The author with the given ID was not found!");
  }
  res.send(author);
});

module.exports = router;
