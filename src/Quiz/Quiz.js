import React, { Component } from "react";
import "./Quiz.css";
import Question from "../Question/Question";
import GameResults from 

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.state = { usersArray: this.props.usersArray };
    this.state = { gameover: false };
    this.nextQuestion = this.nextQuestion.bind(this);
    console.log(this.state.usersArray);
  }


  nextQuestion = () => {
      this.setState({ counter: this.state.counter + 1 });
  }

  cancelGame = () => {
    this.setState( { cancelGame: true });
  }

  render() {
      const quizz = this.props.questions;
      console.log(quizz);
      console.log(quizz[0]);
      console.log(this.props.questions);

      if(this.cancelGame) {
        return (
          <GameResults results={this.props.results}/>
        )
      }
      return (
      <div className="questions" >
        <Question question={quizz[this.state.counter]} nextQuestion={this.nextQuestion} usersArray={this.props.usersArray}/>
      </div>
    );
  }
}

export default Quiz;
