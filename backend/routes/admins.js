const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");

const { Admin, validateAdmin } = require("../models/admin");

const auth = require("../middleware/auth");

router.get("/me", auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user._id).select("-password");
    if (!admin) {
      return res.status(404).send("The admin with the given ID was not found!");
    }
    res.send(admin);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let admin = await Admin.findOne({ email: req.body.email });
  if (admin) {
    return res.status(400).send("This Admin Is Already Registered");
  }

  admin = new Admin(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(admin.password, salt);

  try {
    await admin.save();
    const token = admin.generateAuthToken();
    res
      .header("x-auth-token", token)
      .send(_.pick(admin, ["_id", "name", "email"]));
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
