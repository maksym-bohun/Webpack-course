import Post from "./Post";
import "./styles/style.css";
import json from "./assets/json";
import webpackLogo from "./assets/webpack-logo.png";

const post = new Post("Webpack post title", webpackLogo);

console.log("Post toString ", post.toString());
