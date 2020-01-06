import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar fixed-top">
      <h3>Click Me!</h3>
      <p>
        Click on any animal to earn points, but don't click any animals more
        than once or you will lose!
      </p>
      <span className="navbar-text message">{props.message}</span>
      <span className="navbar-text mr-3">
        Score: {props.score} | Top Score: {props.top_score}
      </span>
    </nav>
  );
}

export default NavBar;
