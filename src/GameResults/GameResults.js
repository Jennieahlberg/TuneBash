import React, { Component } from "react";
import "./GameResults.css";

class GameResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
              { name: "", score: 10 },
              { name: "lasse", score: 5 },
              { name: "gunilla", score: 18 },
              { name: "barbro", score: 12 }
            ]
          };
    }
  

  sortResults = () => {
    this.state.results.sort((a, b) => Number(b.score) - Number(a.score));
  };

  render() {
    const resultBoard = this.props.usersArray;
    console.log(resultBoard);
    console.log(this.props.usersArray);
    this.sortResults();
    console.log(this.state.resultBoard);
    return (
      <div>
          <h1>Vinnare: {resultBoard[0][0]}</h1>
        {this.state.results.map(result => {
          return (
            <p>
              {result.name} {result.score}
            </p>
          );
        })}
      </div>
    );
  }
}

export default GameResults;
