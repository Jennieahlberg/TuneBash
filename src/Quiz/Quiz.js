import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.renderQuestions = this.renderQuestions.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion = () => {
      this.setState({ counter: this.state.counter + 1 });
  }

  renderQuestions(question) {
    return (
      <div className="col-md-6" key={question.id}>
        <Question question={question} nextQuestion={this.nextQuestion} />
      </div>
    );
  }

  render() {
    return (
      <div className="questiones">
        {this.props.questions[this.state.counter]
        .find(this.renderQuestions)}
      </div>
    );
  }
}

export default Quiz;
