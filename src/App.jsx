import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import GameCards from "./components/GameCards";
import animals from "./animals.json";
import "./App.css";

//begin App component
class App extends Component {
  // Setting this.state.animals to the animals json array
  state = {
    score: 0,
    topScore: 0,
    ifClicked: [],
    update: "Click a character to begin!",
    correctMessage: "",
    incorrectMessage: "",
    animals
  };

  //CLICK SECTION
  click = event => {
    const newScore = this.state.score + 1;
    console.log(event.target.alt);
    //If they haven't been clicked, add them to the array
    for (let i = 0; i < this.state.ifClicked.length; i++) {
      if (event.target.alt === this.state.ifClicked[i]) {
        alert("Sorry, you lost! Click to start over.");
        this.reset();
        window.location.reload();
      }
    }
    let array = this.state.ifClicked;
    array.push(event.target.alt);
    this.setState({
      score: newScore,
      ifClicked: array
    });
    this.shuffle();
    if (newScore == 12) {
      alert("Congratulations you won!");
    }
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
    // this.shuffle();
  };

  //Render Game
  // Map over this.state.animals and render GameCards
  render() {
    return (
      <div className="app">
        <div className="section">
          <NavBar
            title="Clicky Animals"
            score={this.state.score}
            topScore={this.state.topScore}
            update={this.state.update}
            correctMessage={this.state.correctMessage}
            incorrectMessage={this.state.incorrectMessage}
          />
          <Header />
        </div>

        <div className="section">
          <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <div className="wrapper">
            {this.state.animals.map((animal, index) => (
              <GameCards
                key={animal.id}
                id={animal.id}
                image={animal.image}
                onClick={this.click}
                name={animal.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
