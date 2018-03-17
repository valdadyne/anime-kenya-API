"use strict";

const Router = require("express");
const userController = require("./userController");

const getUserRoutes = app => {
  const router = new Router();

  router

    // create a new user
    .post("/signup", (req, res) => {
      let { email, password } = req.body;
      let result = userController.signUp(email, password);
      res.send(result);
    })

    // signIn user
    .post("/signin", (req, res) => {
      let { email, password } = req.body;
      let result = userController.signIn(email, password);
      res.send(result);
    });

  app.use("/user", router);
};

module.exports = getUserRoutes;
