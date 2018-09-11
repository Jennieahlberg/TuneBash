import React, { Component } from "react";
import Answer from "../Answer/Answer";
import GameResults from "../GameResults/GameResults";
import io from "socket.io-client";

const socketUrl = "http://localhost:3231";
class QuizAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      usersArray: this.props.usersArray,
      gameEnded: false,
      socket: io(socketUrl), 
    };

    console.log(this.state.usersArray);
  }

   
  componentWillMount() {
    this.onSocket();
    this.next();
  }

  onSocket = () => {
    this.state.socket.on("user joined", data => {
      console.log(data);
      this.setState({ usersArray: data.users });
    });
  };

  
  next() {
    this.state.socket.on('next', (nextquestion) => {
      this.setState({counter: nextquestion });
    })
    console.log("startgame " + this.state.start);
  }

  endGame = () => {
    this.setState({ gameEnded: true });
  };

  render() {
    const quizz = this.props.questions;
    console.log(quizz);
    console.log(this.props.questions);
    console.log(this.state.usersArray);

    return (
      <div className="questions">
        <Answer
          question={quizz[this.state.counter]}
          usersArray={this.props.usersArray}
        />
      </div>
    );
  }
}

export default QuizAnswer;
