"use strict";

const express = require("express");
const app = new express();
const bodyParser = require("body-parser");

// register body-parser middlewear
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/anime/animeRoutes")(app);
require("./app/user/userRoutes")(app);

app.listen(3000, () => {
  console.log("Server up!");
});
