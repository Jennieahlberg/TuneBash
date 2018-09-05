import React, {Component} from 'react';
import './GameLeaderPage.css';
import NewGame from '../NewGame/NewGame.js';
import Quiz from "../Quiz/Quiz";

class GameLeaderPage extends Component{

    constructor(props) {
        super(props);
        this.handleClickStart = this.handleClickStart.bind(this);
        this.state = ({ start: false });
      }


handleClickStart = () => {
    this.setState({ start: true });
  };

render ()  {
    const start = this.state.start;

    if (start) {
        return (
          <div>
            <Quiz />
          </div>
        );
      }

    return <div>
        <div>
            <h1 className="headline">
                Spelomgångens pinkod:
                
                </h1>
        </div>
        <div className="random">
            <p></p>
        </div>
        <div class="button">
            <button id="startGameButton" onClick={this.handleClickStart}>Starta spel</button>
        </div>
        <div className="instructions">
            <p>
                När alla som ska spela har slagit in pinkoden på sin enhet, klickar du på Starta spel.
            </p>
        </div>
    </div>
}
}

export default GameLeaderPage; 