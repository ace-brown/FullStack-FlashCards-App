import React from "react";
import Form from "./Form/Form";
import Posts from "./Posts/Posts";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.body_grid}>
      <Posts />
      <Form />
    </div>
  );
};

export default Body;
