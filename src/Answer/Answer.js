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
    this.submitAnswer = this.submitAnswer.bind(this);
    this.newScore = this.newScore.bind(this);
  }

  componentWillMount() {
    this.newScore();
  }

  submitAnswer(event) {
    let value = event.target.value;
    event.preventDefault();
    const question = this.props.question;
    console.log(question);
    this.state.socket.emit("addScore", value, question.correctAnswer, this.state.usersArray)
  }

  newScore(e) {
    //e.preventDefault();
    this.state.socket.on("newScore", (newUsersArray) => {
      this.setState({usersArray: newUsersArray});
    })
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
    console.log(this.state.usersArray);
    console.log(this.props.usersArray);
    
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
            value={answers[0]}
            onClick={(event) => this.submitAnswer(event)}
          >
            {answers[0]}
          </button>
          <button
            className="answerButton"
            value={answers[1]}
            onClick={(event) => this.submitAnswer(event)}
          >
            {answers[1]}
          </button>
          <button
            className="answerButton"
            value={answers[2]}
            onClick={(event) => this.submitAnswer(event)}
          >
            {answers[2]}
          </button>
          <button
            className="answerButton"
            value={answers[3]}
            onClick={(event) => this.submitAnswer(event)}
          >
            {answers[3]}
          </button>
        </form>
      </div>
    );
  }
}

export default Answer;
