import React from "react";
import classes from "./Form.module.css";
import SearchForm from "./SearchForm";
import CreateForm from "./CreateForm";

const Form = (props) => {
  return (
    <div className={classes.form}>
      <SearchForm />
      <CreateForm />
    </div>
  );
};

export default Form;
