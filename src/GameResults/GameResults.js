import React, { Component } from "react";
import HomeButton from '../HomeButton/HomeButton';

class GameResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultBoard: [
              ["kurt", 10, "bla", 10, "bla"],
              ["lasse", 13, "la", 1, "blala"],
              ["gunilla", 18, "blananan", 10, "bla"],
              ["barbro", 12, "nanana", 1, "bla"],
            ]
          };
    }


  sortResults = () => {
    this.state.resultBoard.sort((a, b) => {
        return b[1] - a[1];
    })
  };

  render() {
    this.sortResults();
    console.log(this.state.correctAnswers);
    console.log(this.props.usersArray);
    console.log(this.props.questions);
    return (
      <div>
          <h1>Vinnare: {this.props.usersArray[0][0]} med {this.props.usersArray[0][1]} poäng!</h1>

          <p> Resultat:</p>
          {/*<h1>Vinnare: {this.state.resultBoard[0][0]} {this.state.resultBoard[0][1]}</h1>*/}
        {this.state.resultBoard.map((result) => {
           return(<p>{result[0]} {result[1]}</p>)})}
      
      <div>
        <HomeButton/>
        </div>
        </div>
    );
  }
}

export default GameResults;
