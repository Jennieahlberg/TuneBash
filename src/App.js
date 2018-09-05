import React, { Component } from "react";
import "./App.css";
import StartPage from "./StartPage/StartPage";

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <StartPage />
          <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="400"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="music"
        />
      </div>
    );
  }
}

export default App;
