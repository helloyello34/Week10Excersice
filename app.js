// App.js

const express = require("express");
const app = express();
const api = require("./src/server/api");

app.use("./src/server/api", api);

app.get("*", (req, res) => {
  res.send({ error: "No route defined" });
});

module.exports = app;
