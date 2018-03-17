"use strict";

const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const { auth, db } = require("./config/config");

// register JSON parser middlewear
app.use(bodyParser.json());

require("./app/anime/animeRoutes")(app);
require("./app/user/userRoutes")(app);

app.listen(3000, () => {
  console.log("Server up!");
});
