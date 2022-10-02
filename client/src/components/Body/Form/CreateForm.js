import React from "react";
import classes from "./SearchForm.module.css";
import styles from "./CreateForm.module.css";
import FormCard from "../../UI/FormCard";
import Button from "../../UI/Button";

const CreateForm = () => {
  const clickHandler = () => {
    console.log("first");
  };

  return (
    <FormCard className={classes.SearchForm}>
      <input className={classes.input} type="text" placeholder="Title" />
      <textarea
        className={`${classes.input} ${styles.input__extra}`}
        placeholder="Message"
      ></textarea>

      <input className={classes.input} type="text" placeholder="Tags" />
      <Button type="submit">submit</Button>

      <Button
        onClick={clickHandler}
        className={styles.button__modifier}
        type="submit"
      >
        Clear
      </Button>
    </FormCard>
  );
};

export default CreateForm;
