import React from "react";
import "./style.css";

const GameCards = props => (
  <div
    className="animalPics"
    key={props.id}
    alt={props.name}
    src={props.image}
    onClick={props.onClick}
  />
);

export default GameCards;
