const express = require("express");
const router = express.Router();

const { Admin, validateAdmin } = require("../models/admin");

router.get("/", async (req, res) => {
  const admins = await Admin.find();
  res.send(admins);
});

router.get("/:id", async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) {
    return res.status(404).send("The admin with the given ID was not found!");
  }
  res.send(admin);
});

router.post("/", async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let admin = await Admin.findOne({ email: req.body.email });
  if (admin) {
    return res.status(400).send("User Already Registered");
  }

  admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await admin.save();
    res.send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const admin = await Admin.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    { new: true }
  );
  if (!admin) {
    return res.status(404).send("The admin with the given ID was not found!");
  }

  res.send(admin);
});

router.delete("/:id", async (req, res) => {
  const admin = await Admin.findByIdAndRemove(req.params.id);
  if (!admin) {
    return res.status(404).send("The admin with the given ID was not found!");
  }
  res.send(admin);
});

module.exports = router;
