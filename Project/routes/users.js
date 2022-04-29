const express = require("express");

const users = (app) => {
  const router = express.Router();
  app.use(router);

  router.get("/users", (req, res) => {
    return res.json({
      saludo: "Hola mundo",
    });
  });

  router.get("/users", (req, res) => {
    return res.json({
      saludo: "Hola mundo",
    });
  });

  router.get("/users", (req, res) => {
    return res.json({
      saludo: "Hola mundo",
    });
  });
};

module.exports = users;
