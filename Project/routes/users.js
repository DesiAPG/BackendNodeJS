const express = require("express");
const UserService = require("../services/users");
const router = express.Router();

const userServe = new UserService();

const users = (router) => {
  router.get("/", async (req, res) => {
    const users = await userServe.getAll();
    return res.json(users);
  });

  router.post("/", async (req, res) => {
    const user = await userServe.create(req.body);
    return res.json(user);
  });

  router.put("/", (req, res) => {
    return res.json({
      hola: "mundo",
    });
  });

  router.delete("/", (req, res) => {
    return res.json({
      hola: "mundo",
    });
  });
};

module.exports = users;
