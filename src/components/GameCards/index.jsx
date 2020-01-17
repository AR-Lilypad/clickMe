import React from "react";
import "./style.css";

const GameCards = props => {
  return (
    <div className="wrapper">
      <div className="gameCard" id={props.key}>
        <img
          id="animalImage"
          value={props.key}
          key={props.id}
          alt={props.name}
          src={props.image}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default GameCards;
