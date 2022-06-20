const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql2");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();
app
  .use(morgan(":method :url :status :res[content-length] - :response-time ms"))
  .use(bodyParser.json());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || undefined,
  database: "blog",
});

//create tables code that should not be here

async function getPosts() {
  console.log("getPosts");
  const [posts] = await pool.promise().query("SELECT * FROM posts LIMIT 50");
  return posts;
}

async function postPost({ author, title, body }) {
  console.log("postPost");
  await pool
    .promise()
    .query("INSERT INTO posts (title, body, author) VALUES (?, ?, ?);", [
      title,
      body,
      author,
    ]);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../app/index.html"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/bundle.js"));
});

app.get("/post", async (req, res) => {
  res.send(await getPosts());
});

app.post("/post", async (req, res) => {
  const { title, body, author } = req.body;
  await postPost({ title, body, author });
  res.send({ title, body, author });
});
app.listen(PORT, async (req, res) => {
  console.log(`server started on port ${PORT}`);
});
