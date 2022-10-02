import React from "react";
import classes from "./SearchForm.module.css";
import FormCard from "../../UI/FormCard";
import Button from "../../UI/Button";

const SearchForm = () => {
  return (
    <FormCard className={classes.SearchForm}>
      <input className={classes.input} type="text" placeholder="Search City" />
      <input className={classes.input} type="text" placeholder="Search Tag" />
      <Button type="submit">Search</Button>
    </FormCard>
  );
};

export default SearchForm;
