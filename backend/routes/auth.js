const express = require("express");
const router = express.Router();
const Joi = require("joi");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Admin } = require("../models/admin");

router.post("/", async (req, res) => {
  const { error } = Validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let admin = await Admin.findOne({ email: req.body.email });
  if (!admin) {
    return res.status(400).send("Invalid Email or Password");
  }

  const validPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!validPassword) {
    return res.status(400).send("Invalid Email or Password");
  }

  try {
    const token = jwt.sign({ _id: admin._id }, "jwtPrivateKey");
    res.send(token);
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
