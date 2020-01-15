import React from "react";
import "./style.css";

const GameCards = props => {
  return (
    <div className="animalPics">
      <div class="photo-grid-container">
        <img
          alt={props.name}
          src={props.image}
          key={props.id}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default GameCards;
