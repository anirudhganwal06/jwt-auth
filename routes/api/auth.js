const express = require("express");

const router = express.Router();

const db = require("../../database");

router.post("/register", (req, res, next) => {
  db.collection("users").add(req.body);
});

module.exports = router;
