// src/api.js
const express = require("express");
const router = express.Router();
const greeting = require("../logic/greeting");

router.get("/greeting", (req, res) => {
  res.status(503).send({error: "I don't know you" });
});

router.get("/greeting/:name", (req, res) => {
  res.status(503).send({ greeting: greeting(req.params.name) });
});

module.exports = router;
