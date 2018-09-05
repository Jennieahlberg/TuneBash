import React, { Component } from "react";
import "./NewGame.css";
import axios from "axios";

class newGame extends Component {
  state = {
    name: "",
    gameId: ""
  };

  constructor(props) {
    super(props);
    this.getAuth = this.getAuth.bind(this);
    this.onClickGenerate = this.onClickGenerate.bind(this);
    this.onClickGenerateCustomGame = this.onClickGenerateCustomGame.bind(this);
    this.state = { generate: false };
    this.state = { custom: false };
  }

  onClickGenerate = () => {
    this.setState({ generate: true });
  };

  onClickGenerateCustomGame = () => {
    this.setState({ custom: true });
  };

  login = callback => {
    var CLIENT_ID = "82c3c3a0508a4fe986a13ae7aaf063f7";
    var CLIENT_SECRET = "0b25a57d012f4823b6594ccc3f39e2aa";
    var REDIRECT_URI = "http://localhost:3000/callback";

    function getLoginURL(scopes) {
      return (
        "https://accounts.spotify.com/authorize?client_id=" +
        CLIENT_ID +
        "&redirect_uri=" +
        encodeURIComponent(REDIRECT_URI) +
        "&scope=" +
        encodeURIComponent(scopes.join(" ")) +
        "&response_type=token"
      );
    }

    var url = getLoginURL(["user-read-email"]);

    var width = 450,
      height = 730;

    window.addEventListener(
      "message",
      function(event) {
        var hash = JSON.parse(event.data);
        if (hash.type == "access_token") {
          callback(hash.access_token);
        }
      },
      false
    );

    var w = window.open(
      url,
      "_self",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height
    );
  };

  getUserData = accessToken => {
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  };

  getAuth = () => {
    this.login(function(accessToken) {
      this.getUserData(accessToken).then(function(response) {
        console.log(response);
        this.display = true;
      });
    });
  };

  render() {
    const generate = this.state.generate;
    const custom = this.state.custom;
    return (
      <div>
        <div className="headline">
          <p>Välj kriterier för spelet</p>
        </div>
        <div>
          <button
            className="button is-spotify"
            id="btn-login"
            onClick={this.getAuth}
          >
            Login to Spotify
          </button>
        </div>

        <div className="form">
          <div className="select">
            <form>
              <p>
                <select name="level">
                  <option value="level">Svårighetsnivå</option>
                  <option value="mixa">Blanda nivåer</option>
                  <option value="pop">Lätt</option>
                  <option value="rock">Medel</option>
                  <option value="country">Svår</option>
                </select>
              </p>
              <p>
                <select name="genre">
                  <option value="genre">Genre</option>
                  <option value="mixa">Blanda genrer</option>
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  <option value="country">Country</option>
                </select>
              </p>
              <p>
                <select name="numberOfQuestions">
                  <option value="antalFrågor">Antal frågor</option>
                  <option value="5">5 frågor</option>
                  <option value="10">10 frågor</option>
                  <option value="15">15 frågor</option>
                </select>
              </p>
              <p>
                <select name="lengthOfSong">
                  <option value="låtlängd">Låtlängd</option>
                  <option value="10">10 sek</option>
                  <option value="30">30 sek</option>
                  <option value="1">1 min</option>
                  <option value="fullLängd">Hela låten</option>
                </select>
              </p>

              <p>
                <select name="language">
                  <option value="spårk">Språk</option>
                  <option value="alla">Blanda alla språk</option>
                  <option value="30">Endast svenska</option>
                  <option value="1">Endast engelska</option>
                  <option value="fullLängd">
                    Varken svenska eller engelska
                  </option>
                </select>
              </p>

              <button id="createPinCode" onClick={this.onClickGenerate}>
                Skapa pinkod
              </button>
            </form>
          </div>
        </div>
        <div className="generateCustomGame">
          <button
            id="generateCustomGame"
            onClick={this.onClickGenerateCustomGame}
          >
            Eller skapa en omgång med dina egna frågor ➔
          </button>
        </div>
      </div>
    );
  }
}

export default newGame;
