// App.js

const express = require("express");
const app = express();
const api = require("./server");

app.use("./server.js", api);

app.get("*", (req, res) => {
  res.send({ error: "No route defined" });
});

module.exports = app;
