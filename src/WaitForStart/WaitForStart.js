import React, { Component } from "react";
import "./WaitForStart.css";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import axios from "axios";
import { VERIFY_USER, LOGOUT } from "../Events";
import io from "socket.io-client";
import Quiz from "../Quiz/Quiz";
import QuizAnswers from "../QuizAnswers/QuizAnswers";
import GameResults from "../GameResults/GameResults";

const socketUrl = "http://localhost:3231";
class WaitForStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: true,
      usersArray: [],
      socket: io(socketUrl),
      start: false,
      questions: [],
      counter: 0
    };
  }

  componentWillMount() {
    this.initSocket();
    this.onSocket();
    this.startgame();
    this.next();
  }

  initSocket = () => {
    this.state.socket.on("connect", () => {
      console.log("Connected");
    });
    this.state.socket.emit("add user", this.props.name);
  };

  onSocket = () => {
    this.state.socket.on("user joined", data => {
      console.log(data);
      this.setState({ usersArray: data.users });
    });
  };

  startgame() {
    this.state.socket.on("gameStarts", (data, questiones, users) => {
      this.setState({ start: data, questions: questiones, usersArray: users });
    });
    console.log("startgame " + this.state.start);
  }

  next() {
    this.state.socket.on('next', (nextquestion) => {
      this.setState({counter: nextquestion });
    })
    console.log("startgame " + this.state.start);
  }

  render() {
    const members = this.state.members;
    console.log("userArray: " + this.state.usersArray);
    console.log(this.state.questions.length);
    console.log(this.state.counter);

    if (this.state.start && (this.state.counter >= this.state.questions.length)) {
      return <GameResults results={this.state.usersArray} />;
    }

    if (members) {
      const names = {
        gameId: this.props.gameId,
        name: this.props.name
      };
    }

    if (this.state.start) {
      return (
        <div>
          <Quiz questions={this.state.questions} />
          <QuizAnswers
            questions={this.state.questions}
            usersArray={this.state.usersArray}
          />
        </div>
      );
    }

    return (
      <div>
        <div>
          <h1 className="headline">
            Väntar på att spelledaren ska starta spel
          </h1>
        </div>
        <div className="spinner">
          <ReactSpinner />
        </div>
        <div className="names">{this.state.usersArray}</div>
      </div>
    );
  }
}

export default WaitForStart;
