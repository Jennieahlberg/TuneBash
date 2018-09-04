import React, { Component } from "react";
import "./App.css";
import StartPage from "./StartPage/StartPage";
import Quiz from "./Quiz/Quiz";
import NewGame from "./NewGame/NewGame";
import WaitForStart from "./WaitForStart/WaitForStart";
import GameLeaderPage from "./GameLeaderPage/GameLeaderPage";
import CustomGame from "./CustomGame/CustomGame";
import Name from "./Name/Name";
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.state = { playGame: false };

    this.handleClickCreateGame = this.handleClickCreateGame.bind(this);
    this.state = { newGame: false };

    this.handleClickGenerate = this.handleClickGenerate.bind(this);
    this.state = { generate: false };

    this.handleClickStart = this.handleClickStart.bind(this);
    this.state = { start: false };

    this.handleClickGenerateCustomGame = this.handleClickGenerateCustomGame.bind(this);
    this.state = { custom: false };

    this.handleClickAddName = this.handleClickAddName.bind(this);
    this.state = { name: false };
    this.state = { quiz: [] };
  }

  handleClickPlay() {
    this.setState({ playGame: true });
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

  handleClickAddName = () => {
    this.setState({ name: true });
  }

  refreshAndStartGame = () => {

  }

  refreshAndGetNextQuestion = () => {

  }

  refreshAndShowResult = () => {

  }

  refreshAndEndGame = () => {

  }

  sendName = () => {
    
  }

  render() {
    const playGame = this.state.playGame;
    const newGame = this.state.newGame;
    const generate = this.state.generate;
    const start = this.state.start;
    const custom = this.state.custom;
    const name = this.state.name;

    if (start) {
      return (
        <div>
          <Quiz />
        </div>
      );
    }

    if (playGame) {
      return (
        <div className="App">
          <WaitForStart />
        </div>
      );
    }

    if (name) {
      return (
        <div className="App">
          <Name 
          onSubmitName={this.handleClickPlay}
          />
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
        <StartPage
          onClick={this.handleClickAddName}
          onClickNew={this.handleClickCreateGame}
        />
        <iframe 
        src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" 
        width="100" 
        height="100" 
        frameborder="0" 
        allowtransparency="true" 
        allow="encrypted-media">
        </iframe>
      </div>
    );
  }
}

export default App;
