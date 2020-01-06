using various methods for styling

render(){
let classes = "badge m-2"
classes += (this.state.count === 0) ? "warning" : "primary";

return (

<div>
<span className={classes}>{this.formatCount()}</span>
<button className="btn btn-secondary btn-sm">Increment</button>
</div>
);
}

Use the following for styling individulally or outside to the span (see line 17)
styles = {
fontSize: 18,
fontWeight: "bold"
};

or use the inline styling that you see on line 29

or, make a variable that will apply to multiples
render() {
return (

<div>
<span style={this.styles} className="badge badge-primary m-2">
{/_ or, <span styles {{fontSize: 18}} className="badge badge-priamry m-2">_/}
{this.formatCount()}
</span>
{/_ <span className={this.getGameCardClasses()}>{this.formatCount()}</span> _/}
<button className="btn btn-secondary btn-sm">Increment</button>
</div>
);
}

thirdly- REFACTOR to save wordy coding:

<!-- select lines 40,42 right click refactor -->
<!-- extract to new method in class score and name the method -->
<!-- change the span to be className={this.newMethod (whatever name you give it... )} and then delete the let variable lines (46 & 47-->

render() {
let classes = "badge m-2";
classes += this.state.count === 0 ? "warning" : "primary";

    return (
        <div>   etc
    )

}

======================================================import React from "react";
import GameCards from "../GameCards";
import animals from "../../animals.json";
import "./styles.css";

// shuffle upon each click
// function shuffle(array) {
// for (let i = array.length - 1; i > 0; i--) {
// const j = Math.floor(Math.random() \* (i + 1));
// [array[i], array[j]] = [array[j], array[i]];
// }
// return array;
// }

class GameBoard extends React.Component {
state = {
animals,
message: "Click a butterfly, bird, or fish to begin!",
score: 0,
topScore: 0
};

handleClick = (id, clicked) => {
const imageSelect = this.state.images;

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

render() {
return (
<div className="container-fluid wrapper">
<div className="gameMessage text-center">
<p>{this.state.message}</p>
<div
            className="navbar-text"
            message={this.state.message}
            score={this.state.score}
            top_score={this.state.top_score}
          />

          <div class="flexBox">
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
}

export default GameBoard;
