import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      usersArray: this.props.usersArray,
      gameover: false
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    console.log(this.state.usersArray);
  }

  nextQuestion = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  cancelGame = () => {
    this.setState({ cancelGame: true });
  };

  render() {
    const quizz = this.props.questions;
    console.log(quizz);
    console.log(this.props.questions);

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
