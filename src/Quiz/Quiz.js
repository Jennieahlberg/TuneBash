import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion = () => {
      this.setState({ counter: this.state.counter + 1 });
  }

  render() {
      const quizz = this.props.questions;
    return (
      <div className="questions">
        <Question question={quizz[this.state.counter]} nextQuestion={this.nextQuestion} />
      </div>
    );
  }
}

export default Quiz;
