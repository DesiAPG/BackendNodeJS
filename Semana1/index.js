const express = require("express");
const { port } = require("./config");
const app = express();

const users = [];

app.use(express.json);

// Metodo get para obtener la ruta principal
app.get("/", (req, res) => {
  res.json(users);
  return res.json(users);
});

app.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  return res.json(users);
});

app.put("/", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  users = users.map((user) => (user.id === id ? body : user));
  return res.status(201).json(users);
});

app.delete("/:id", (req, res) => {
  const users = users.filter((user) => id !== user.id);
  return res.status(201).json(users);
});

// Escuchar en el puerto 4000
app.listen(port, () => {
  console.log("Listening on port " + port);
});
