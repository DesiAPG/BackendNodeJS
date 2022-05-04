const express = require("express");

const auth = (app) => {
  const router = express.Router();
  app.use('auth',router)
  
};
