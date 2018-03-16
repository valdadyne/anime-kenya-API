"use strict";

const express = require("express");
const app = new express();
const bodyParser = require("body-parser");

// register JSON parser middlewear
app.use(bodyParser.json());

require("./app/anime/animeRoutes")(app);

app.listen(3000, () => {
  console.log("Server up!");
});
