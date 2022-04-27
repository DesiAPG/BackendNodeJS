const express = require("express");
const { connection } = require("./config/db");
const app = express();

connection();

app.get("/", (req, res) => {
  console.log("hello world");
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
