import React from 'react';
import './Name.css';

const name = (props) => {
    return <div>
        <div className="headline">
            <p>Skriv in ditt eller ditt lags namn</p>
        </div>
        <div className="name">
            <form onSubmit={props.onSubmitName}>
                <input id="name" type="text" name="name" placeholder="Namn" autoComplete="off" />
                <input type="submit" id="startGameButton" value="Kör!" />
            </form>
        </div>
    </div>
}

export default name; 