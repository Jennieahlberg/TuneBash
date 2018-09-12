import React, { Component } from "react";

class GameResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
          {name: "Janne", score: 18},
          {name: "Sofia", score: 10}
      ]
    };
    
  }

  sortResults = () => {
    this.state.results.sort((a, b) => Number(b.score) - Number(a.score));
  };

  render() {
    this.sortResults();
    console.log(this.state.correctAnswers);
    console.log(this.props.usersArray);
    console.log(this.props.questions);
    return (
      <div>
          <h1>Vinnare: {this.props.usersArray[0][0]} med {this.props.usersArray[0][1]} poäng!</h1>
        <div>
          {this.state.results.map(result => {
            return (
              <div>
                <p>
                  {result.name} {result.score}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GameResults;
