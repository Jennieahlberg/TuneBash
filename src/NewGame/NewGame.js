import React, { Component } from "react";
import "./NewGame.css";
import GameLeaderPage from "../GameLeaderPage/GameLeaderPage";
import CustomGame from "../CustomGame/CustomGame";
import axios from 'axios';



class newGame extends Component {
  state = {
    orderForm: {
      level: {
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      gameId: {
        value: 0,
        validation: {
          required: true
        },
        valid: false
      },
      genre: {
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      numberOfQuestions: {
        value: 0,
        validation: {
          required: true
        },
        valid: false
      },
      lengthOfSong: {
        value: 0,
        validation: {
          required: true
        },
        valid: false
      },
      language: {
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      name: {
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    }
  }

  constructor(props) {
    super(props);
    this.submitDataHandler = this.submitDataHandler.bind(this);
    this.onClickGenerateCustomGame = this.onClickGenerateCustomGame.bind(this);
    this.state = { generate: false };
    this.state = { custom: false };
  }

  checkValidity(value, rules) {
    let isValid = false;

    if(rules.required){
      isValid = value.trim() !== '';
    }

    return isValid;
  }

  submitDataHandler = () => {
    const random = Math.floor(Math.random() * (999999 - 100000) + 100000);

    const newGame = {
      level: this.state.level,
      gameId: random,
      genre: this.state.genre,
      numberOfQuestions: this.state.numberOfQuestions,
      lengthOfSong: this.state.lengthOfSong,
      language: this.state.language,
      name: this.state.name
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newGame) //Ändra metoden!
    console.log(newGame);
    this.setState({ generate: true });
  }

  onClickGenerateCustomGame = () => {
    this.setState({ custom: true });
  };

  render() {
    const generate = this.state.generate;
    const custom = this.state.custom;

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

    return (
      <div>
        <div className="headline">
          <p>Välj kriterier för spelet</p>
        </div>

        <div className="form">
          <div className="select">
            <form onSubmit={this.submitDataHandler}>
              <p>
                <select value={this.state.level} onChange={(event) => this.setState({ level: event.target.value })}>
                  <option value="" disabled selected>Svårighetsnivå</option>
                  <option value="mix">Blanda nivåer</option>
                  <option value="pop">Lätt</option>
                  <option value="rock">Medel</option>
                  <option value="country">Svår</option>
                </select>
              </p>
              <p>
                <select value={this.state.genre} onChange={(event) => this.setState({ genre: event.target.value })}>
                  <option value="" disabled selected>Genre</option>
                  <option value="mix">Blanda genrer</option>
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  <option value="country">Country</option>
                </select>
              </p>
              <p>
                <select value={this.state.numberOfQuestions} onChange={(event) => this.setState({ numberOfQuestions: event.target.value })}>
                  <option value="" disabled selected>Antal frågor</option>
                  <option value="5">5 frågor</option>
                  <option value="10">10 frågor</option>
                  <option value="15">15 frågor</option>
                </select>
              </p>
              <p>
                <select value={this.state.lengthOfSong} onChange={(event) => this.setState({ lengthOfSong: event.target.value })}>
                  <option value="" disabled selected>Låtlängd</option>
                  <option value="10">10 sek</option>
                  <option value="30">30 sek</option>
                  <option value="1">1 min</option>
                  <option value="fullLength">Hela låten</option>
                </select>
              </p>

              <p>
                <select value={this.state.language} onChange={(event) => this.setState({ language: event.target.value })}>
                  <option value="" disabled selected>Språk</option>
                  <option value="mix">Blanda alla språk</option>
                  <option value="swedish">Endast svenska</option>
                  <option value="english">Endast engelska</option>
                  <option value="notSwedishNotEnglish">Varken svenska eller engelska</option>
                </select>
              </p>

              <p><input placeholder="Spelledarens namn" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} /></p>

              <input type="submit" id="createPinCode" value="Skapa pinkod" />
            </form>
          </div>
        </div>
        <div className="generateCustomGame">
          <button id="generateCustomGame" onClickGenerateCustomGame={this.handleClickGenerateCustomGame}>
            Eller skapa en omgång med dina egna frågor ➔
          </button>
        </div>
      </div>
    );
  }
}

export default newGame;
