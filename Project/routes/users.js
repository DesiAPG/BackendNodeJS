const express = require("express");
const UserService = require("../services/users");
const router = express.Router();

const userServe = new UserService();

const users = (router) => {
  router.get("/", async (req, res) => {
    const users = await userServe.getAll();
    return res.json(users);
  });

  router.post("/:id", async (req, res) => {
    const user = await userServe.create(req.body);
    return res.json(user);
  });

  router.put("/:id", async (req, res) => {
    const user = await userServe.update(req.params.id);
  });

  router.delete("/:id", async (req, res) => {
    const user = await userServe.delete(req.params.id);
  });
};

module.exports = users;
