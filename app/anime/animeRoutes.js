"use strict";

const Router = require("express");
const animeController = require("./animeController");

const getAnimeRoutes = app => {
  const router = new Router();

  router

    // get all anime
    .get("/", (req, res) => {
      const result = animeController.getAll();
      res.send(result);
    })

    // get a single anime by it's Id
    .get("/:id", (req, res) => {
      const id = parseInt(req.params.id);
      const result = animeController.getById(id);
      if (result) {
        res.send(result);
      } else {
        res.send("Anime Missing");
      }
    });

  app.use("/anime", router);
};

module.exports = getAnimeRoutes;
