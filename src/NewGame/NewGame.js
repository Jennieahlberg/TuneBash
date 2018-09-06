import React, { Component } from "react";
import "./NewGame.css";
import GameLeaderPage from "../GameLeaderPage/GameLeaderPage";
import CustomGame from "../CustomGame/CustomGame";
import axios from 'axios';



class newGame extends Component {
  state = {
    level: '',
    category: '',
    numberOfQuestions: 0,
    lengthOfSong: 0,
    language: '',
    name: ''
  };

  constructor(props) {
    super(props);
    this.submitDataHandler = this.submitDataHandler.bind(this);
    this.onClickGenerateCustomGame = this.onClickGenerateCustomGame.bind(this);
    this.state = { generate: false };
    this.state = { custom: false };
    this.state = { gameId: 0 };
  }

  submitDataHandler = () => {
    const random = Math.floor(Math.random() * (999999 - 100000) + 100000);

    const newGame = {
      level: this.state.level,
      gameId: random,
      category: this.state.category,
      numberOfQuestions: this.state.numberOfQuestions,
      lengthOfSong: this.state.lengthOfSong,
      language: this.state.language,
      name: this.state.name
    };

    axios.post('http://localhost:8080/getquestions', newGame)
    console.log(newGame);
    console.log(random);

    this.setState({gameId: random});
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
          <GameLeaderPage onClickStart={this.handleClickStart} gameId={this.state.gameId}/>
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
                  <option value="Lätt">Lätt</option>
                  <option value="Medel">Medel</option>
                  <option value="Svår">Svår</option>
                </select>
              </p>
              <p>
                <select value={this.state.category} onChange={(event) => this.setState({ category: event.target.value })}>
                  <option value="" disabled selected>Genre</option>
                  <option value="mix">Blanda genrer</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Country">Country</option>
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
                  <option value="">Blanda alla språk</option>
                  <option value="Svenska">Endast svenska</option>
                  <option value="Engelska">Endast engelska</option>
                  <option value="varkenSvenskaEllerEngelska">Varken svenska eller engelska</option>
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
