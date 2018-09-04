import React from 'react';
import './Name.css';

const name = (props) => {
    return <div>
        <div className="headline">
         <p>Skriv in ditt eller ditt lags namn</p>
        </div>
       <form onSubmit={props.onSubmitName}>
        <div className="name">
            <input type="text" name="name" placeholder="Namn" autoComplete="off"/>
        </div>
        <div class="button">
            <input type="submit" id="startGameButton" value="Kör!"/>
        </div>
        </form>
    </div>
}

export default name; 