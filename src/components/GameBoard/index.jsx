//use snippets imrc to create Import React/Components
import React from "react";
import "./style.css";

const GameBoard = props => (
  <div className="container-fluid wrapper">{props.children}</div>
);

export default GameBoard;
