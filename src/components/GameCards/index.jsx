import React from "react";
import "./style.css";

const GameCards = props => (
  <div
    className="gameCards"
    value={props.id}
    onClick={() => props.click(props.id)}
  >
    <div className="imgContainer">
      <img
        alt={props.name}
        src={props.image}
        // onClick={props.onClick}
      />
    </div>
  </div>
);

export default GameCards;
