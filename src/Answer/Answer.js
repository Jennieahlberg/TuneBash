import React, { Component } from "react";
import io from "socket.io-client";

const socketUrl = "http://localhost:3231";
class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: this.props.usersArray,
      socket: io(socketUrl),
      value: "",
      shuffle: true
    };
  }

  submitAnswer(event) {
    for (let user of this.state.usersArray) {
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
    this.setState({ shuffle: false });
    return array;
  };

  render() {
    const question = this.props.question;
    console.log(question);
    
    const answers = [
      question.correctAnswer,
      question.wrongAnswer1,
      question.wrongAnswer2,
      question.wrongAnswer3
    ];

    if (this.state.shuffle) {
      this.shuffleAnswers(answers);
    }

    return (
      <div>
        <form>

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
    );
  }
}

export default Answer;
