import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";
import GameResults from "../GameResults/GameResults";
import io from "socket.io-client";

const socketUrl = "http://localhost:3231";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      usersArray: this.props.usersArray,
      gameEnded: false,
      socket: io(socketUrl), 
    };

    this.nextQuestion = this.nextQuestion.bind(this);
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

  nextQuestion() {
    this.setState({ counter: this.state.counter + 1 });
    this.state.socket.emit('next', this.state.counter + 1);
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

    if(this.state.counter >= quizz.length){
        return(
        <GameResults results={this.props.results}/>)
    }

    return (
      <div className="questions">
        <Question
          question={quizz[this.state.counter]}
          nextQuestion={this.nextQuestion}
          usersArray={this.props.usersArray}
        />
      </div>
    );
  }
}

export default Quiz;
