import React, { Component } from "react";
import "./MusicPlayer.css";



class MusicPlayer extends Component {
  
  render() {
    const question = this.props.question;
    return (
      <iframe
      src={question.songLink}
      width="300"
      height="80"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    );
  }
}

export default MusicPlayer;
