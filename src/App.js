import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ".GameBoard.css";
import GameCards from "./components/GameCards";
import animals from "./animals.json";

// shuffle upon each click
// const shuffleArray = (animals) => {
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// set the cards state
class App extends Component {
  state = {
    animals,
    message: "Click a butterfly, bird, or fish to begin!",
    score: 0,
    topScore: 0
  };
}

// arrange animals in random manner
handleClick = (id, clicked) => {
  shuffleArray = this.shuffleArray(animals);
  this.setState({ animals: shuffleArray });

  if (clicked) {
    imageSelect.forEach((image, index) => {
      imageSelect[index].clicked = false;
    });
    return this.setState({
      image: imageSelect.sort(() => Math.random() - 0.5),
      message: "You Guessed Wrong!",
      score: 0
    });
  } else {
    imageSelect.forEach((image, index) => {
      if (id === image.id) {
        imageSelect[index].clicked = true;
      }
    });

    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;

    return this.setState({
      image: imageSelect.sort(() => Math.random() - 0.5),
      message: "You Guessed Correctly!",
      score: newScore,
      topScore: newTopScore
    });
  }
};

render();
{
  return (
    <div className="container-fluid wrapper">
      <Navbar>
        <div class="navbar fixed-top">
          <div class="navBar-text message" message={this.state.message} />

          <div
            class="navabar-text mr-3"
            score={this.state.score}
            topScore={this.state.topSscore}
          />
        </div>
      </Navbar>

      <div class="headerBG" />

      <div class="container">
        <div class="gameBoard">
          {this.state.images.map(image => (
            <GameCards
              key={image.id}
              id={image.id}
              animal={image.animal}
              clicked={image.clicked}
              image={image.image}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
