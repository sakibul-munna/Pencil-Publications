const ObjectId = require("mongoose").Types.ObjectId;

function objIdValidation(req, res, next) {
  if (!req.params.id) {
    return res.status(400).send("Params do not contain any Object ID!");
  } else if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Params contains an invalid Object ID.");
  } else {
    next();
  }
}
module.exports = objIdValidation;
