import React from 'react';
import './Name.css';

const name = (props) => {
    return <div>
        <div className="headline">
         <p>Skriv in ditt eller ditt lags namn</p>
        </div>
        <div className="name">
            <input type="text" name="name" placeholder="Namn"/>
        </div>
        <div class="button">
            <button id="startGameButton" onClick={props.onClickPlay}>Kör!</button>
        </div>
    </div>
}

export default name; 