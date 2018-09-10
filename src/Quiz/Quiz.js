import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";
import GameResults from "../GameResults/GameResults";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      usersArray: this.props.usersArray,
      gameEnded: false
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    console.log(this.state.usersArray);
  }

  nextQuestion = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  endGame = () => {
    this.setState({ gameEnded: true });
  };

  render() {
    const quizz = this.props.questions;
    console.log(quizz);
    console.log(this.props.questions);

    if(this.gameEnded){
        return(
        <GameResults results={this.props.results}/>)

    }
    return (
      <div className="questions">
        <Question
          question={quizz[this.state.counter]}
          nextQuestion={this.nextQuestion}
          usersArray={this.props.usersArray}
        />
      </div>
    );
  }
}

export default Quiz;
