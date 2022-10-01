import React from "react";
import classes from "./FormCard.module.css";
const FormCard = (props) => {
  return (
    <div className={`${classes.formCard} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default FormCard;
