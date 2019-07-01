import React from "react";
import classes from "./Modal.css";
import BackDrop from "../Backdrop/BackDrop";

const modal = props => {
  return (
    <div>
      <BackDrop show={props.show} cliked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default modal;
