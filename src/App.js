import React, { Component } from "react";
import "./App.css";
import StartPage from "./StartPage/StartPage";
import Quiz from "./Quiz/Quiz";
import NewGame from "./NewGame/NewGame";
import WaitForStart from "./WaitForStart/WaitForStart";
import GameLeaderPage from "./GameLeaderPage/GameLeaderPage";
import CustomGame from "./CustomGame/CustomGame";
import Name from "./Name/Name";

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '82c3c3a0508a4fe986a13ae7aaf063f7'; // Your client id
var client_secret = '0b25a57d012f4823b6594ccc3f39e2aa'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(3000);

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

    this.handleClickGenerateCustomGame = this.handleClickGenerateCustomGame.bind(
      this
    );
    this.state = { custom: false };

    this.handleClickAddName = this.handleClickAddName.bind(this);
    this.state = { name: false };
    this.state = { quiz: [] };
  }

  
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
  }

  handleClickCreateGame() {
    this.setState({ newGame: true });
  }

  handleClickGenerate() {
    this.setState({ generate: true });
  }

  handleClickStart() {
    this.setState({ start: true });
  }

  handleClickGenerateCustomGame() {
    this.setState({ custom: true });
  }

  handleClickAddName() {
    this.setState({ name: true });
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
          <Name onClickPlay={this.handleClickPlay} />
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
        <div class="container">
          <div id="login">
            <h1>This is an example of the Authorization Code flow</h1>
            <a href="/login" class="btn btn-primary">
              Log in with Spotify
            </a>
          </div>
          <div id="loggedin">
            <div id="user-profile" />
            <div id="oauth" />
            <button class="btn btn-default" id="obtain-new-token">
              Obtain new token using the refresh token
            </button>
          </div>
        </div>
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="100"
          height="100"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}

export default App;
