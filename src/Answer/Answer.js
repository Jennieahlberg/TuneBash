import React, { Component } from "react";
import io from "socket.io-client";
import './Answer.css';

const socketUrl = "http://localhost:3231";
class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [this.props.name, 0],
      socket: io(socketUrl),
      value: "",
      shuffle: true,
      end: false,
      disableAnswers: false
    };
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  componentWillMount() {
    this.gameEnded();
  }

  submitAnswer(event) {
    event.preventDefault();
    const question = this.props.question;
    this.state.usersArray.push(event.target.value);
    if (event.target.value === question.correctAnswer) {
      this.state.usersArray[1]++;
    }
    this.setState({disableAnswers: true});
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

  gameEnded() {
    this.state.socket.on("gameEnded", data => {
      this.setState({ end: data });
      this.state.socket.emit("finalResult", this.state.usersArray);
      console.log(this.state.usersArray);
    });
  }

  render() {
    const question = this.props.question;
    const disableAnswers = this.state.disableAnswers;

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
      <div className="buttonFormDiv">
        <form className="buttonForm">
          <button
            className="answerButton"
            value={answers[0]}
            onClick={event => this.submitAnswer(event)}
            {...disableAnswers ? <disabled/> : <normal/> }
          >
            {answers[0]}
          </button>
          <button
            className="answerButton"
            value={answers[1]}
            onClick={event => this.submitAnswer(event)}
            {...disableAnswers ? <disabled/> : <normal/> }
          >
            {answers[1]}
          </button>
          <button
            className="answerButton"
            value={answers[2]}
            onClick={event => this.submitAnswer(event)}
            {...disableAnswers ? <disabled/> : <normal/> }
          >
            {answers[2]}
          </button>
          <button
            className="answerButton"
            value={answers[3]}
            onClick={event => this.submitAnswer(event)}
            {...disableAnswers ? <disabled/> : <normal/> }
          >
            {answers[3]}
          </button>
        </form>
      </div>
    );
  }
}

export default Answer;
