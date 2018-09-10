import React, { Component } from "react";
import "./GameLeaderPage.css";
import NewGame from "../NewGame/NewGame.js";
import Quiz from "../Quiz/Quiz";
<<<<<<< HEAD
import axios from 'axios';
import io from 'socket.io-client';

const socketUrl = "http://localhost:3231"
=======
import axios from "axios";
>>>>>>> master

class GameLeaderPage extends Component {
  constructor(props) {
    super(props);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.state = { start: false };
    this.state = { questions: [] };
<<<<<<< HEAD
    this.state = { socket: io(socketUrl) };
=======
    const level = this.props.level;
    const category = this.props.category;
    const numberOfQuestions = this.props.numberOfQuestions;
    const lengthOfSong = this.props.lengthOfSong;
    const language = this.state.language;
>>>>>>> master

    axios
      .get(
        "http://localhost:8080/getquestions/{" + level + "}/{" + numberOfQuestions + "}/{" + lengthOfSong + "}/{" + language + "}"
      )
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
  componentWillMount() {
    this.onSocket();
  }


  handleClickStart = () => {
    this.setState({ start: true });
  };

  onSocket = () => {
    this.state.socket.on('user joined', (data) => {
      console.log(data);
      this.setState({ usersArray: data.users });
    });

  }

  render() {
    const start = this.state.start;
    const gameId = this.props.gameId;

    if (start) {
<<<<<<< HEAD
      return (
        <Quiz
          questions={this.state.questions}
        />
      );
=======
      return <Quiz questions={this.state.questions} />;
>>>>>>> master
    }

    return (
      <div>
        <div>
          <h1 className="headline">Spelomgångens pinkod:</h1>
        </div>
        <div className="random">
          {gameId}
        </div>
        <div class="button">
          <button id="startGameButton" onClick={this.handleClickStart}>
            Starta spel
          </button>
        </div>
        <div className="instructions">
          <p>
            När alla som ska spela har slagit in pinkoden på sin enhet, klickar
            du på Starta spel.
          </p>
        </div>
        <div className="names">
          {this.state.usersArray}
        </div>
      </div>
    );
  }
}

export default GameLeaderPage;
