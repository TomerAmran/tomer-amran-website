DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;
USE blog;
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  title TEXT,
  body TEXT,
  author TEXT
);