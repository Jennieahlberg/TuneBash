import React, { Component } from "react";
import "./GameLeaderPage.css";
import NewGame from "../NewGame/NewGame.js";
import Quiz from "../Quiz/Quiz";
import axios from "axios";
import io from "socket.io-client";

const socketUrl = "http://localhost:3231";
class GameLeaderPage extends Component {
  constructor(props) {
    super(props);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.state = { 
      start: false,
      questions: [],
      usersArray: [],
      socket: io(socketUrl) 
     };
    
    const lengthOfSong = this.props.lengthOfSong;
    

    axios
        .get(
        "http://localhost:8080/questions/" + this.props.level + "/" + this.props.category + "/" + this.props.language)

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
    for (let user of this.state.usersArray){
      newUsersArray.push([user, 0]);
    }
    console.log(newUsersArray);
    this.setState({ usersArray: newUsersArray });
    console.log(this.state.usersArray);
    this.state.socket.emit('startgame', true, this.state.questions, this.state.usersArray);
  };

  render() {
    const start = this.state.start;
    const gameId = this.props.gameId;
    console.log(this.props.level);
    console.log(this.props.category);

    if (start) {
      return (
        <Quiz
          questions={this.state.questions}
          usersArray={this.state.usersArray}
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
        <div className="names">{this.state.usersArray}</div>
      </div>
    );
  }
}

export default GameLeaderPage;
