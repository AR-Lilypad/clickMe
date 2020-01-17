import React from "react";
import "./style.css";

const GameCards = props => {
  return (
    <div className="photo-grid-container">
      {/* <div className="row"> */}
      <div className="row" id={props.key}>
        <img
          value={props.key}
          key={props.id}
          alt={props.name}
          src={props.image}
          onClick={props.onClick}
        />
      </div>
    </div>
    // </div>
  );
};

export default GameCards;
