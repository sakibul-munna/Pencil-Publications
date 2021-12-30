const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();

app.get("/", (req, res) => {
  res.send("Welcome to Pencil Publications !!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
});
