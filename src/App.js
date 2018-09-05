import React, { Component } from "react";
import "./App.css";
import StartPage from "./StartPage/StartPage";
import Quiz from "./Quiz/Quiz";
import NewGame from "./NewGame/NewGame";

import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.handleClickCreateGame = this.handleClickCreateGame.bind(this);
    this.state = { newGame: false };

    this.handleClickStart = this.handleClickStart.bind(this);
    this.state = { start: false };

    this.handleSubmitPinCode = this.handleSubmitPinCode.bind(this);
    this.state = { name: false };
    this.state = { quiz: [] };

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

  handleSubmitPinCode = (event) => {
    if (event) event.preventDefault();
    const input = document.getElementById('codeInput').value;
    this.setState({ name: true });
  }

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

   

    if (newGame) {
      return (
        <div className="App">
          <NewGame
            onClickGenerate={this.handleClickGenerate}
            
          />
        </div>
      );
    }

    return (
      <div className="App">
        <StartPage/>
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="400"
          height="80"
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
