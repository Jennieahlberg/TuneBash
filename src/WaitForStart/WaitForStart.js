import React, { Component } from "react";
import "./WaitForStart.css";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
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
      newUsersArray: [],
      socket: io(socketUrl),
      start: false,
      questions: [],
      counter: 0,
      gameEnded: false,
    };
  }

  componentWillMount() {
    this.initSocket();
    this.onSocket();
    this.startgame();
    this.next();
    this.final();
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

  final() {
    this.state.socket.on("final", data => {
      this.setState({ newUsersArray: data });
      this.setState({ gameEnded: true });
    });
  }

  separateNames() {
    const names = [];
    for (let user of this.state.usersArray) {
      names.push(user + " ");
    }
    console.log(names);
    console.log(this.state.usersArray);
    return names;
  }

  render() {
    const members = this.state.members;
    const gameEnded = this.state.gameEnded;
    console.log(this.state.questions);

    if(gameEnded){
      return <GameResults usersArray={this.state.newUsersArray} questions={this.state.questions}/>
    }

    if (this.state.start && (this.state.counter >= this.state.questions.length)) {
      return <GameResults usersArray={this.state.newUsersArray} questions={this.state.questions}/>
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
            name={this.props.name}
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
        <div className="names">{this.separateNames()}</div>
      </div>
    );
  }
}

export default WaitForStart;
