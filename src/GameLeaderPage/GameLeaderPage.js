import React, { Component } from "react";
import "./GameLeaderPage.css";
import NewGame from "../NewGame/NewGame.js";
import Quiz from "../Quiz/Quiz";
import axios from "axios";
import io from "socket.io-client";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const socketUrl = "http://localhost:3231";
class GameLeaderPage extends Component {
  constructor(props) {
    super(props);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.state = {
      start: false,
      questions: [],
      usersArray: [],
      socket: io(socketUrl),
      counter: 0
    };
    this.nextQuestion = this.nextQuestion.bind(this);

    const lengthOfSong = this.props.lengthOfSong;

    axios
      .get(
        "http://localhost:8080/questions/" +
          this.props.level +
          "/" +
          this.props.category +
          "/" +
          this.props.language
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

  onSocket = () => {
    this.state.socket.on("user joined", data => {
      console.log(data);
      this.setState({ usersArray: data.users });
    });
  };

  handleClickStart = () => {
    this.setState({ start: true });
    const newUsersArray = [];
    console.log(this.state.usersArray);
    for (let user of this.state.usersArray) {
      newUsersArray.push([user, 0]);
    }
    console.log(newUsersArray);
    this.setState({ usersArray: newUsersArray });
    console.log(this.state.usersArray);
    console.log(this.state.counter);
    console.log(this.state.questions[this.state.counter]);
    this.state.socket.emit(
      "startgame",
      true,
      this.state.questions,
      this.state.usersArray
    );
  };

  nextQuestion() {
    this.setState({ counter: this.state.counter + 1 });
    this.state.socket.emit("next", this.state.counter + 1);
  }

  render() {
    const quizz = this.state.questions;
    const start = this.state.start;
    const gameId = this.props.gameId;
    console.log(this.props.level);
    console.log(this.props.category);
    console.log(this.state.questions);
    console.log(quizz[0]);
    console.log(this.state.counter);

    if (start) {
      return (
        <div>
          <MusicPlayer question={quizz[this.state.counter]} />
          <p>{this.state.counter+1}/{quizz.length}</p>
          <Quiz
            questions={this.state.questions}
            usersArray={this.state.usersArray}
            nextQuestion={this.nextQuestion}
          />
          <div className="next">
            <button onClick={this.nextQuestion}>Nästa fråga</button>
            <button onClick={this.props.endGame} result={this.state.usersArray}>
              Avsluta spel
            </button>
          </div>
        </div>
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
        <div className="names">{this.state.usersArray}</div>
      </div>
    );
  }
}

export default GameLeaderPage;
