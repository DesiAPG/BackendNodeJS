const express = require("express");
const { port } = require("./config");
const app = express();

const users = [];

// Metodo get para obtener la ruta principal
app.get("/", (req, res) => {
  res.json(users);
  return res.json(users);
});

app.post("/", (req, res) => {
  const user = req.body;
  users.push(users);
  return res.json(users);
});

app.put("/", (req, res) => {
  users.map((users) => {
      if(id === user.id){
          
      }
  });
  return res.json(users);
});

app.delete("/:id", (req, res) => {
  const users = users.filter((user) => id !== user.id);
  return res.json(users);
});

// Escuchar en el puerto 4000
app.listen(port, () => {
  console.log("Listening on port " + port);
});
