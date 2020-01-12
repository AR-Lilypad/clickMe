import React from "react";
import "./style.css";

const NavBar = props => (
  <div className="navBar fixed-top">
    <div className="nav-item">
      <ul className="title-messages ml-auto">
        <li>
          <a href="https://ar-lilypad.github.io/clickMe/">Click Me!</a>
        </li>
        <li className="nav-item centernativeitem">
          <div className="messages">
            <span className="update">{props.update}</span>
            <span className="correctMessage">{props.correctMessage}</span>
            <span className="incorrectMessage">{props.incorrectMessage}</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="scores">
            Score: <span className="countScore">{props.score}</span> | Top
            Score: <span className="countTopScore"> {props.topScore}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
