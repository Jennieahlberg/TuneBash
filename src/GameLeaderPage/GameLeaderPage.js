import React, { Component } from "react";
import "./GameLeaderPage.css";
import NewGame from "../NewGame/NewGame.js";
import Quiz from "../Quiz/Quiz";
import axios from 'axios';

class GameLeaderPage extends Component {
  constructor(props) {
    super(props);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.state = { start: false };
    this.state = { questions: [] };

    axios
      .get("http://localhost:8080/questions")
      .then(response => {
        const newQuiz = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, { questions: newQuiz });

        this.state.initialQuestions = newState.questions;
        // store the new state object in the component's state
        this.setState(newState);
        console.log(newQuiz);
        console.log(this.state.questions);
      })
      .catch(error => console.log(error));
  }

  handleClickStart = () => {
    this.setState({ start: true });
  };

  render() {
    const start = this.state.start;
    const gameId = this.props.gameId;

    if (start) {
      return (
          <Quiz
           questions={this.state.questions}
           />
      );
    }

    return (
      <div>
        <div>
          <p className="headline">Spelomgångens pinkod:</p>
        </div>
        <div>
          <p className="random">{gameId}</p>
        </div>
        <div class="buttonStartGame">
          <button id="startGameButton" onClick={this.handleClickStart}>
            Starta spel
          </button>
        </div>
        <div>
          <p className="instructions">
            När alla som ska spela har slagit in pinkoden på sin enhet, klickar
            du på Starta spel.
          </p>
        </div>
      </div>
    );
  }
}

export default GameLeaderPage;
