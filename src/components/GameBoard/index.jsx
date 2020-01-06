//use snippets imrc to create Import React/Components
import React from "react";
import "./style.css";

const GameBoard = props => (
  <div className={props.shakeWrapper === "true" ? "wrapperShake" : "wrapper"}>
    {props.pictures}
  </div>
);

export default GameBoard;
