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
      disableButton: this.props.disableButton
    };
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  componentWillMount() {
    this.gameEnded();
    this.next();
  }

  next() {
    this.state.socket.on("next", nextquestion => {
      this.setState({disableButton: false});
    });
    console.log("hej");
  }

  submitAnswer(event) {
    this.setState({disableButton: true})
    event.preventDefault();
    const question = this.props.question;
    this.state.usersArray.push(event.target.value);
    if (event.target.value === question.correctAnswer) {
      this.state.usersArray[1]++;
    }
  }

  gameEnded() {
    this.state.socket.on("gameEnded", data => {
      this.setState({ end: data });
      this.state.socket.emit("finalResult", this.state.usersArray);
    });
  }

  render() {

    const answers = this.props.answers;
  
    console.log(answers);
    console.log(this.props.disableButton);
    console.log(this.state.disableButton);
    console.log(this.state.usersArray);


    return (
      <div className="buttonFormDiv">
        <form className="buttonForm">
          <button
            className="answerButton" 
            value={answers[0]}
            onClick={event => this.submitAnswer(event)}
            disabled={this.state.disableButton}
          >
            {answers[0]}
          </button>
          <button
            className="answerButton" 
            value={answers[1]}
            onClick={event => this.submitAnswer(event)}
            disabled={this.state.disableButton}
          >
            {answers[1]}
          </button>
          <button
            className="answerButton" 
            value={answers[2]}
            onClick={event => this.submitAnswer(event)}
            disabled={this.state.disableButton}
          >
            {answers[2]}
          </button>
          <button
            className="answerButton" 
            value={answers[3]}
            onClick={event => this.submitAnswer(event)}
            disabled={this.state.disableButton}
          >
            {answers[3]}
          </button>
        </form>
      </div>
    );
  }
}

export default Answer;
