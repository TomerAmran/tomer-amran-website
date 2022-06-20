const React = require("react");
const ReactDom = require("react-dom/client");
// const App = require("./app.jsx").default;
const Blog = require("./blog.jsx");
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Blog />);
