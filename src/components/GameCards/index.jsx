import React from "react";
import "./style.css";

const GameCards = props => (
  <div
    className="gameCard"
    key={props.id}
    onClick={() => props.handleClick(props.id, props.clicked)}
  >
    <img id={props.animal} src={props.image} alt={props.clicked} />
  </div>
);

export default GameCards;
