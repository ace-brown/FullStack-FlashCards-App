import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Navbar.module.css";

const Navbar = (porps) => {
  return (
    <Card className={classes.navbar}>
      <div className={classes.navbar__logo}>Travel.go</div>

      <div className={classes.navbar__login}>
        <div>acocunt icon</div>
        <h4>Account name</h4>
        <Button>Login</Button>
      </div>
    </Card>
  );
};

export default Navbar;
