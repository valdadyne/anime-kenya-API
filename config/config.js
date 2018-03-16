const admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");

// firebase init
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// firebase auth
const auth = admin.auth();

// firestore
const db = admin.firestore();

module.exports = {
  auth: auth,
  db: db
};
