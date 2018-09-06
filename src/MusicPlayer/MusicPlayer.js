import React, { Component } from "react";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.playMusic = this.playMusic.bind(this);
    this.state = { play: false };
  }

  playMusic = () => {
    this.setState({ play: true });
    console.log(this.state);
  };

  render() {
    const play = this.state.play;

    if (play) {
      return (
        <div>
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
    return (
      <div>
        <button onClick={this.playMusic}>Play</button>
      </div>
    );
  }
}

export default MusicPlayer;
