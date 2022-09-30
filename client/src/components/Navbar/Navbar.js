import React from "react";
import Button from "../UI/Button";

import classes from "./Navbar.module.css";

const Navbar = (porps) => {
  return (
    <div className={classes.navbar}>
      <div>logo</div>

      <div className={classes.navbar__login}>
        <div>acocunt icon</div>
        <h4>Account name</h4>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
