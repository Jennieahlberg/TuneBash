import React, { Component } from "react";
import "./Question.css";
import Line from "../Progressbar/Line";

class Question extends Component {

  submitAnswer() {}

  render() {
    const question = this.props.question;
    return (
      <div className="Question">
      <iframe src="https://open.spotify.com/embed/track/7qvxFz3JodM0A7xEM7k3YD" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <div className="Question_question">
          <form>
            <p> {question.question}</p>

            <button className=" answerButton" onClick={this.submitAnswer}>
              {question.correctAnswer}
            </button>
            <button className=" answerButton" onClick={this.submitAnswer}>
              {question.wrongAnswer1}
            </button>
            <button className=" answerButton" onClick={this.submitAnswer}>
              {question.wrongAnswer2}
            </button>
            <button className=" answerButton" onClick={this.submitAnswer}>
              {question.wrongAnswer3}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Question;
