const admin = require("firebase-admin");

const serviceAccount = require("./config/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jwt-auth-5c211.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;
