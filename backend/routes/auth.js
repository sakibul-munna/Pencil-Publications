const express = require("express");
const router = express.Router();
const Joi = require("joi");

const bcrypt = require("bcrypt");

const { Admin } = require("../models/admin");

router.post("/", async (req, res) => {
  const { error } = Validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await Admin.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Invalid Email or Password");
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid Email or Password");
  }

  try {
    res.send(true);
  } catch (error) {
    res.status(400).send(error);
  }
});

function Validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
}

module.exports = router;
