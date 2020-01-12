import React, { Component } from "react";
import GameCards from "./components/GameCards";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import animals from "./animals.json";
import "./App.css";

//////////////////////////////////////////////////////////////////
class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    score: 0,
    topScore: 0,
    clicked: [],
    update: "Click a character to begin!",
    correctMessage: "",
    incorrectMessage: "",
    animals
  };

  //CLICK SECTION
  click = id => {
    const newScore = this.state.score + 1;
    //If they haven't been clicked, add them to the array
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({
        //concat joins arrays
        clicked: this.state.clicked.concat(id),
        correctMessage: "You guessed correctly!",
        incorrectMessage: "",
        update: ""
      });
      //if they've been clicked already, reset the game
    } else {
      this.reset();
    }

    //Setting it to winning number
    if (newScore === 12 && this.state.clicked.indexOf(id) === -1) {
      this.setState({
        correctMessage: "You win!",
        clicked: []
      });
    }
  };

  //SCORING SECTION
  handleIncrement = () => {
    //Take existing score and add 1 to it
    const newScore = this.state.score + 1;

    // Update score and clear out message
    this.setState({
      score: newScore
    });

    //Set high score
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    }
    //Resetting score to 1 if they hit 13 (so that we can give them a score of 12, win the game, and then have them click again to start over). Putting in 'high score' of 12 so it can't go to 13 when they do the next click
    if (newScore > 12) {
      this.setState({
        score: 1,
        topScore: 12
      });
    }
    //Shuffle cards
    this.shuffle();
  };

  //Shuffle GameCards
  shuffle = () => {
    //Set this array equal to the animals json
    //Fisher–Yates shuffle
    let imageArray = animals;
    for (let i = imageArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }
    return imageArray;
  };

  //Reset
  reset = () => {
    //Update state when they lose
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: [],
      correctMessage: "",
      incorrectMessage: "Sorry! Click a character to start over."
    });
    this.shuffle();
  };

  /////////////////////////////////////////////////////////////////////

  //GAME RENDER
  // Map over this.state.animals and render GameCards
  render() {
    return (
      <GameBoard>
        <NavBar
          title="Clicky Me"
          score={this.state.score}
          topScore={this.state.topScore}
          update={this.state.update}
          correctMessage={this.state.correctMessage}
          incorrectMessage={this.state.incorrectMessage}
        />
        <Header />
        {this.state.animals.map(animals => (
          <GameCards
            key={animals.id}
            id={animals.id}
            click={this.click}
            name={animals.name}
            image={animals.image}
            scores={!this.state.score && this.state.topScore}
          />
        ))}
      </GameBoard>
    );
  }
}

//////////////////////////////////////////////////////////////////
export default App;
