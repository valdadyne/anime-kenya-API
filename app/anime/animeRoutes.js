"use strict";

const Router = require("express");
const animeController = require("./animeController");

const getAnimeRoutes = app => {
  const router = new Router();

  router
    .get("/get/:id", (req, res) => {
      const id = parseInt(req.params.id);
      const result = animeController.getById(id);
      res.send(result);
    })
    .get("/all", (req, res) => {
      const result = animeController.getAll();
      res.send(result);
    });

  app.use("/anime", router);
};

module.exports = getAnimeRoutes;
