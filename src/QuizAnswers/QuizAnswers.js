import React, { Component } from "react";
import Answer from "../Answer/Answer";
import io from "socket.io-client";

const socketUrl = "http://localhost:3231";
class QuizAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      usersArray: [],
      gameEnded: false,
      socket: io(socketUrl),
      answerArray: [],
      disableButton: false,
    };
  }

  componentWillMount() {
    this.onSocket();
    this.next();
    this.createArraysInArray();
  }

  onSocket = () => {
    this.state.socket.on("user joined", data => {
      this.setState({ usersArray: data.users });
    });
  };

  next() {
    this.state.socket.on("next", nextquestion => {
      this.setState({ counter: nextquestion });
      const answers = [
        this.props.questions[this.state.counter].correctAnswer,
        this.props.questions[this.state.counter].wrongAnswer1,
        this.props.questions[this.state.counter].wrongAnswer2,
        this.props.questions[this.state.counter].wrongAnswer3
      ];
      this.shuffleAnswers(answers);
      this.setState({ answerArray: answers });
    });
    const answers = [
      this.props.questions[this.state.counter].correctAnswer,
      this.props.questions[this.state.counter].wrongAnswer1,
      this.props.questions[this.state.counter].wrongAnswer2,
      this.props.questions[this.state.counter].wrongAnswer3
    ];
    this.shuffleAnswers(answers);
    this.setState({ answerArray: answers });
  }

  endGame = () => {
    this.setState({ gameEnded: true });
  };

  createArraysInArray = () => {
    const table = [];
    const users = this.props.usersArray;
    for (var i = 0; i < users.length; i++) {
      table[i] = [users[i], 0];
    }
    this.setState({ usersArray: table });
  };

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
    const quizz = this.props.questions;
    

    return (
      <div className="questions">
        <Answer
          question={quizz[this.state.counter]}
          disableButton={this.state.disableButton}
          answers={this.state.answerArray}
          usersArray={this.state.usersArray}
          name={this.props.name}
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default QuizAnswer;
