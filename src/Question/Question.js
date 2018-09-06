import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
  render() {
    const Question = this.props.question;
    return (
      <div className="Question">

        <div id="Question_question">
          <div className="Question__cat">{question.varugrupp}</div>
          <h2>{question.question}</h2>
          <div className="Question_answer">{question.answers}</div>
          <h3>{question.answer1}</h3>
          <h3>{question.answer2}</h3>
          <h3>{question.answer3}</h3>
          <h3>{question.answer4}</h3>
          
        </div>
      </div>
    );
  }
}


export default Question;