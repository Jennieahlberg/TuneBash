import React from 'react';
import './GameLeaderPage.css';

const gameLeaderPage = (props) => {
    return <div>
        <div>
            <h1 className="headline">
                Spelomgångens pinkod:
                </h1>
        </div>
        <div className="random">
            <p>{Math.floor(Math.random() * (999999 - 100000) + 100000)}</p>
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