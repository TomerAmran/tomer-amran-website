const mysql = require("mysql2");
const fs = require("fs");
setTimeout(
  () =>
    mysql
      .createConnection({
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PASSWORD || undefined,
        multipleStatements: true,
      })
      .promise()
      .query(fs.readFileSync("meta-blog-schema.sql").toString()),

  10000
);
