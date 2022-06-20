const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql2");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

mysql
  .createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || undefined,
    multipleStatements: true,
  })
  .promise()
  .query(fs.readFileSync("meta-blog-schema.sql").toString());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || undefined,
  database: "blog",
});

//create tables code that should not be here

async function getPosts() {
  const [posts] = await pool.promise().query("SELECT * FROM posts LIMIT 50");
  return posts;
}

async function postPost() {
  await pool
    .promise()
    .query("INSERT INTO posts VALUES (? ? ?);", [author, text, timestamp]);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../app/index.html"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/bundle.js"));
});

app.get("/post", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
