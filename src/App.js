import React, { Component } from 'react';
import './App.css';
import StartPage from './StartPage/StartPage';
import Quiz from './Quiz/Quiz';
import NewGame from './NewGame/NewGame';
import WaitForStart from './WaitForStart/WaitForStart';
import GameLeaderPage from './GameLeaderPage/GameLeaderPage';
import CustomGame from './CustomGame/CustomGame';

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
    this.state = { custom: false};
  }

  handleClickPlay() {
    this.setState({ playGame: true });
  }

  handleClickCreateGame() {
    this.setState({ newGame: true });
  }

  handleClickGenerate() {
    this.setState({ generate: true });
  }

  handleClickStart() {
    this.setState({ start: true })
  }

  handleClickGenerateCustomGame(){
    this.setState({ custom: true })
  }

  render() {
    const playGame = this.state.playGame;
    const newGame = this.state.newGame;
    const generate = this.state.generate;
    const start = this.state.start;
    const custom = this.state.custom;
  
    if (start) {
      return (
        <div>
          <Quiz />
        </div>
      )
    }

    if (playGame) {
      return (
        <div className="App">
          <WaitForStart />
        </div>
      )
    }

    if (generate) {
      return (
        <div className="App">
          <GameLeaderPage onClickStart={this.handleClickStart} />
        </div>
      )
    }

    if(custom){
      return(
        <div>
          <CustomGame onClickGenerate={this.handleClickGenerate} />
          </div>
      )
    }

    if (newGame) {
      return (
        <div className="App">
          <NewGame
            onClickGenerate={this.handleClickGenerate}
            onClickGenerateCustomGame={this.handleClickGenerateCustomGame} />
        </div>
      )
    }

    return (
      <div className="App">
        <StartPage
          onClick={this.handleClickPlay}
          onClickNew={this.handleClickCreateGame} />
      </div>
    );
  }
}


export default App;
