const express = require("express");
const router = express.Router();

const { Author, validateAuthor } = require("../models/author");

router.get("/", async (req, res) => {
  const authors = await Author.find().sort("name");
  res.send(authors);
});

router.get("/:id", async (req, res) => {
  const author = await Author.findById(req.params.id);
  if (!author) {
    return res.status(404).send("The author with the given ID was not found!");
  }
  res.send(author);
});

router.post("/", async (req, res) => {
  const { error } = validateAuthor(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let author = new Author({ name: req.body.name });
  try {
    author = await author.save();
    res.send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { error } = validateAuthor(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const author = await Author.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!author) {
    return res.status(404).send("The author with the given ID was not found!");
  }

  res.send(author);
});

router.delete("/:id", async (req, res) => {
  const author = await Author.findByIdAndRemove(req.params.id);
  if (!author) {
    return res.status(404).send("The author with the given ID was not found!");
  }
  res.send(author);
});

module.exports = router;