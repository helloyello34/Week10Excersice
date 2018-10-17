// App.js

const app = require("./src/server/api");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
