import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";
import io from 'socket.io-client';


const socketUrl = "http://localhost:3231"
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.state = { usersArray: this.props.usersArray };
    this.nextQuestion = this.nextQuestion.bind(this);
    console.log(this.state.usersArray);
  }
 

  nextQuestion = () => {
      this.setState({ counter: this.state.counter + 1 });
  }

  render() {
      const quizz = this.props.questions;
    return (
      <div className="questions" key={quizz[this.state.counter].id}>
        <Question question={quizz[this.state.counter]} nextQuestion={this.nextQuestion} usersArray={this.props.usersArray}/>
      </div>
    );
  }
}

export default Quiz;
