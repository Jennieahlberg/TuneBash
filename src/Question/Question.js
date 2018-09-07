import React, { Component } from "react";
import "./Question.css";
import Line from "../Progressbar/Line";

class Question extends Component {

  submitAnswer() {}

  render() {
    const question = this.props.question;
    return (
      <div className="Question">
      <iframe
          src="https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9?cid=null"
          type="audio/mpeg"
          allow="autoplay"
          id="iframeAudio"
        />
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
