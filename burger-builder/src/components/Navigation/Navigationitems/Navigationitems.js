import React from "react";
import classes from "./Navigationitems.css";

const Navigationitems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <li className={classes.NavigationItem}>
        <a href="#">Burger Builder</a>
      </li>
      <li className={classes.NavigationItem}>
        <a href="#">Check Out</a>
      </li>
    </ul>
  );
};

export default Navigationitems;
