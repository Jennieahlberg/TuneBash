import React, { Component } from "react";
import "./App.css";
import StartPage from "./StartPage/StartPage";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

class App extends Component {


  render() {
    return (
      <div className="App">
        <StartPage />
        <MusicPlayer/>        
      </div>
    );
  }
}

export default App;
