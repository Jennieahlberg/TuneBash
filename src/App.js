import React, { Component } from "react";
import "./App.css";
import StartPage from "./StartPage/StartPage";
import Quiz from "./Quiz/Quiz";
import NewGame from "./NewGame/NewGame";
import GameLeaderPage from "./GameLeaderPage/GameLeaderPage";
import CustomGame from "./CustomGame/CustomGame";

import axios from 'axios';

import WaitForStart from "./WaitForStart/WaitForStart";


class App extends Component {
  
  constructor(props) {
    super(props);

    this.handleClickCreateGame = this.handleClickCreateGame.bind(this);
    this.state = { newGame: false };

    this.handleClickGenerate = this.handleClickGenerate.bind(this);
    this.state = { generate: false };

    this.handleClickStart = this.handleClickStart.bind(this);
    this.state = { start: false };

    this.handleClickGenerateCustomGame = this.handleClickGenerateCustomGame.bind(this);
    this.state = { custom: false };

    this.handleSubmitPinCode = this.handleSubmitPinCode.bind(this);
    this.state = { name: false };
    this.state = { quiz: [] };

<<<<<<< HEAD

=======
  
  createGist = opts => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "post",
      body: JSON.stringify(opts)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {});
  };

  handleClickPlay() {
    this.setState({ playGame: true });
>>>>>>> master
  }

  handleClickCreateGame = () => {
    this.setState({ newGame: true });
  }

  handleClickGenerate = () => {
    this.setState({ generate: true });
  }

  handleClickStart = () => {
    this.setState({ start: true });
  }

  handleClickGenerateCustomGame = () => {
    this.setState({ custom: true });
  }

  handleSubmitPinCode = (event) => {
    if (event) event.preventDefault();
    const input = document.getElementById('codeInput').value;
    this.setState({ name: true });
  }

<<<<<<< HEAD
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
          console.log(response);
        }); 
    
  }
=======
  
>>>>>>> master

  render() {
    const newGame = this.state.newGame;
    const generate = this.state.generate;
    const start = this.state.start;
    const custom = this.state.custom;
    

    if (start) {
      return (
        <div>
          <Quiz />
        </div>
      );
    }


    if (generate) {
      return (
        <div className="App">
          <GameLeaderPage onClickStart={this.handleClickStart} />
        </div>
      );
    }

    if (custom) {
      return (
        <div>
          <CustomGame onClickGenerate={this.handleClickGenerate} />
        </div>
      );
    }

    if (newGame) {
      return (
        <div className="App">
          <NewGame
            onClickGenerate={this.handleClickGenerate}
            onClickGenerateCustomGame={this.handleClickGenerateCustomGame}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <StartPage/>
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="100"
          height="100"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="music">
        </iframe>
        
      </div>
    );
  }
}

export default App;
