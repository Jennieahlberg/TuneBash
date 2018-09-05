import React from 'react';
import './GameLeaderPage.css';
import '../NewGame/NewGame.js';
import newGame from '../NewGame/NewGame.js';

const gameLeaderPage = (props) => {
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
            <button id="startGameButton" onClick={props.onClickStart}>Starta spel</button>
        </div>
        <div className="instructions">
            <p>
                När alla som ska spela har slagit in pinkoden på sin enhet, klickar du på Starta spel.
            </p>
        </div>
    </div>
}

export default gameLeaderPage; 