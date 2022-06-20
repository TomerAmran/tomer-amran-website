const axios = require("axios");
const { useEffect } = require("react");
const React = require("react");
const SERVER_URL = "http://tomeramran.com";
// const SERVER_URL = "http://localhost:3000";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const fetchPosts = () => {
    return axios.get(`${SERVER_URL}/post`).then(({ data }) => {
      setPosts(data);
    });
  };

  const addPost = (event) => {
    event.preventDefault();
    const post = {
      name: document.getElementById("name").value,
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
    };
    return axios.post(`${SERVER_URL}/post`, post);
  };

  useEffect(fetchPosts, []);
  return (
    <div>
      <h1>Blog</h1>
      <button onClick={fetchPosts}>fetch posts</button>
      <form onSubmit={addPost}>
        <label>
          Name:
          <input id="name" type="text" name="name" />
        </label>
        <label>
          Title:
          <input id="title" type="text" name="title" />
        </label>
        <label>
          Body:
          <input id="body" type="text" name="body" />
        </label>
        <input type="submit" value="Add Post" />
      </form>

      {posts.reverse().map((post) => (
        <div>
          <h2>{post.title}</h2>
          <h5>{post.author}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

module.exports = Blog;
