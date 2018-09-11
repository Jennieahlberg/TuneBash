import React, { Component } from "react";
import "./Question.css";
import io from "socket.io-client";

const socketUrl = "http://localhost:3231";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      usersArray: this.props.usersArray, 
      socket: io(socketUrl), 
      value: "",
      shuffle: true
    };
  }

  render() {
    const question = this.props.question;
    console.log(question);
    console.log(this.props.question);
    console.log(this.state.usersArray);

    
    return (
      <div className="Question">
        <div className="Question_question">
          <p>{question.question}</p>
        </div>
      </div>
    );
  }
}

export default Question;
