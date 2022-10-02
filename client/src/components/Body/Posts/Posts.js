import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={classes.container}>
      <Post>post 1</Post>
      <Post>post 2</Post>
      <Post>post 3</Post>
      <Post>post 4</Post>
      <Post>post 4</Post>
      <Post>post 4</Post>
      <Post>post 4</Post>
    </div>
  );
};

export default Posts;
