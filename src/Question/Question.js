import React, { Component } from "react";
import "./Question.css";
import io from "socket.io-client";

const socketUrl = "http://localhost:3231";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { usersArray: this.props.usersArray };
    this.state = { socket: io(socketUrl) };
    this.state = { value: "" };
  }

  submitAnswer(event) {
    for (let user of this.usersArray) {
      if ((event.target.value = this.question.correctAnswer)) {
        user[1]++;
      }
      user[user.length] = event.target.value;
    }
  }

  shuffleAnswers = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    const question = this.props.question;
    console.log(question);
    console.log(this.props.question);
    
    const answers = [
      question.correctAnswer,
      question.wrongAnswer1,
      question.wrongAnswer2,
      question.wrongAnswer3
    ];

    this.shuffleAnswers(this.answers);
    return (
      <div className="Question">
        <iframe
          src={question.songLink}
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <div className="Question_question">
          <form>
            <p> {question.question}</p>

            <button
              className="answerButton"
              value={this.state.value}
              onClick={this.submitAnswer}
            >
              {answers[0]}
            </button>
            <button
              className="answerButton"
              value={this.state.value}
              onClick={this.submitAnswer}
            >
              {answers[1]}
            </button>
            <button
              className="answerButton"
              value={this.state.value}
              onClick={this.submitAnswer}
            >
              {answers[2]}
            </button>
            <button
              className="answerButton"
              value={this.state.value}
              onClick={this.submitAnswer}
            >
              {answers[3]}
            </button>
          </form>
        </div>
        <div className="next">
          <button onClick={this.props.nextQuestion}>Nästa fråga</button>
          <button onClick={this.props.cancel} result={this.state.usersArray}>Avsluta spel</button>
        </div>
      </div>
    );
  }
}

export default Question;
