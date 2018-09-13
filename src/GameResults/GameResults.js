import React, { Component } from "react";
import HomeButton from "../HomeButton/HomeButton";
import "./GameResults.css";

class GameResults extends Component {
  constructor(props) {
    super(props);
  }

  sortResults = () => {
    this.props.usersArray.sort((a, b) => {
      return b[1] - a[1];
    });
  };

  render() {
    this.sortResults();
    console.log(this.props.usersArray);
    console.log(this.props.questions);
    return (
      <div className="wrapper">
        <div>
          <p className="headlineResult"> Resultat</p>
          {this.props.usersArray.map(result => {
            return (
              <p className="textResult">
                {result[0]} {result[1]} poäng
              </p>
            );
          })}
          <p className="headlineResult">Facit</p>
          {this.props.questions.map(questionsAndAnwers => {
            return (
              <div>
                <p className="textQuestions">{questionsAndAnwers.question}</p>
                <p className="textQuestions">
                  Rätt svar: {questionsAndAnwers.correctAnswer}
                </p>
              </div>
            );
          })}
          <HomeButton />
        </div>
      </div>
    );
  }
}

export default GameResults;
