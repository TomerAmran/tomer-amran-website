const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "/app/index.html"));
  res.sendFile(path.join(__dirname, "/app/index.html"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "/app/index.js"));
});

app.listen(3000, () => {
  console.log("server started on port 5000");
});
