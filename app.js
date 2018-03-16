"use strict";

const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./config/firebase.json");

// firebase init
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// register JSON parser middlewear
app.use(bodyParser.json());

require("./app/anime/animeRoutes")(app);

app.listen(3000, () => {
  console.log("Server up!");
});
