import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  renderQuestions(question) {
    return (
      <div className="col-md-6" key={question.id}>
        <Question question={question} />
      </div>
    );
  }

  render() {
    return (
      <div className="questiones">
      <h1>Här ska det vara frågor</h1>
        {this.props.questions.map(this.renderQuestions)}
      </div>
    );
  }
}

export default Quiz;
