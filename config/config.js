const firebase = require("firebase");
const admin = require("firebase-admin");
const { config, serviceAccount } = require("./firebase.js");

// firebase init
firebase.initializeApp(config);

// firebase-admin init
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// firebase auth
const auth = firebase.auth();

// firestore
const db = admin.firestore();

module.exports = {
  admin: admin,
  auth: auth,
  db: db
};
