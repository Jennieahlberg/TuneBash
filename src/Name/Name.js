/*OBS DENNA COMPONENT ANVÄNDS INTE JUST NU

import React, { Component } from 'react';
import WaitForStart from '../WaitForStart/WaitForStart';
import './Name.css';
import axios from 'axios';

class Name extends Component {
    state = {
        name: ''
    }

    constructor(props) {
        super(props);

        this.submitDataHandler = this.submitDataHandler.bind(this);
        this.state = { playGame: false };
    }

    submitDataHandler = () => {
        const data = {
            data: this.state.name
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data) //LÄNK SKA BYTAS UT
            .then(response => {
                console.log(response);
            });

            this.setState({ playGame: true });
    }

    render() {
        const playGame = this.state.playGame;

        if (playGame) {
            return (
                <div className="App">
                    <WaitForStart />
                </div>
            );
        }

        return (
            <div>
                <div className="headline">
                    <p>Skriv in ditt eller ditt lags namn</p>
                </div>
                <div className="name">
                    <form onSubmit={this.submitDataHandler}>
                        <input type="text" value={this.state.name} onChange={(event) => this.setState({ data: event.target.value })} placeholder="Namn" autoComplete="off" />
                        <input type="submit" id="startGameButton" value="Kör!" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Name;

*/
