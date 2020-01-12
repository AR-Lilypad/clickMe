import React, { Component } from "react";
// import Header from "./components/Header";
import GameCards from "./components/GameCards";
import shuffle from "shuffle-array";
// import GameBoard from "./components/GameBoard";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import animals from "./animals.json";
// import App from "./App";

class App extends Component {
  state = {
    animals: [
      {
        img: require("./images/bird1.PNG")
      },
      {
        img: require("./images/bird3.PNG")
      },
      {
        img: require("./images/bird4.PNG")
      },
      {
        img: require("./images/bird5.PNG")
      },
      {
        img: require("./images/bttrFly1.PNG")
      },
      {
        img: require("./images/bttrFly2.PNG")
      },
      {
        img: require("./images/bttrFly3.PNG")
      },
      {
        img: require("./images/bttrFly6.PNG")
      },
      {
        img: require("./images/fish1.PNG")
      },
      {
        img: require("./images/fish2.PNG")
      },
      {
        img: require("./images/fish4.PNG")
      },
      {
        img: require("./images/fish6.PNG")
      }
    ]
  };

  handleClick(event) {
    let shuffleArray = this.state.animals;
    shuffle(shuffleArray);
    this.setState({ animals: shuffleArray });
  }

  render() {
    return (
      <div className="App">
        <h4>Clicky Animals</h4>
        <div className="animalPics">
          {this.state.animals.map((animal, index) => (
            <GameCards
              id={index}
              image={animal.img}
              onClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
