import React, { Component } from "react";
import "./MusicPlayer.css";



class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.playMusic = this.playMusic.bind(this);
    this.state = { play: false };
    this.state = { play: false };
    this.url = "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3";
    this.audio = new Audio(this.url);
    this.state = {player: false};

  }

  playMusic = () => {
    this.setState({ play: true });
    console.log(this.state);   
  };

  render() {
    const play = this.state.play;
    const url = this.url;

    if (play) {
      return (
        <div>
          <iframe className="musicPlayer"
            src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
            width="80"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="music"
          />
        </div>
      );
    }
    
    return (
      <div>
        <button onClick={this.playMusic}>Play</button>
      </div>
    );
  }
}

export default MusicPlayer;
