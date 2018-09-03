import React from 'react';
import './WaitForStart.css';
import {ReactSpinner} from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

const waitForStart = () => {
    return <div>
        <div>
            <h1 className="headline">
                Väntar på att spelledaren ska starta spel
                </h1>
            </div>
        <div className="spinner">
        <ReactSpinner />
        </div>
    </div>
}

export default waitForStart; 