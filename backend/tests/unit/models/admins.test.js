const { Admin } = require("../../../models/admin");
const config = require("config");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

describe("admin.generateAuthToken", () => {
  it("should return a valid JWT token", () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
    };
    const admin = new Admin(payload);
    const token = admin.generateAuthToken();
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    expect(decoded).toMatchObject(payload);
  });
});
