import React from "react";
import "./style.css";

const GameCards = props => {
  return (
      <div className="photo-grid-container">
        <div className="row">
          <img
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
