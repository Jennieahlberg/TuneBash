import React, { Component } from 'react';
import axios from 'axios';
import './CustomGameLeaderPage.css'
import GameLeaderPage from '../GameLeaderPage/GameLeaderPage';

class CustomGameLeaderPage extends Component {

    constructor(props) {
        super(props);
        this.startCustomGame = this.startCustomGame.bind(this);

        this.state = {
            letsplay: false,
            pin: ''
        }

    }

    startCustomGame = (e) => {
        e.preventDefault();

        const pinCode = {
            pin: this.state.pin
        }

        axios.post('http://localhost:8080/getCustomQuiz/', pinCode)
        this.setState({ letsplay: true });
    }

    render() {
        const letsplay = this.state.letsplay;

        if (letsplay) {
            return (
                <div>
                    <GameLeaderPage gameId={this.state.pin} />
                </div>
            );
        }

        return (
            <div>
                <div>
                    <p className="infoMessage">
                        Slå in pinkoden som du fick när du gjorde ditt egna quiz
                            </p>
                </div>
                <div className="formDivCustomStart">
                    <form onSubmit={this.state.startCustomGame}>
                        <input type="text" required pattern="[0-9]{6,6}" title="Pinkoden ska bestå av sex siffror" value={this.state.pin} onChange={(event) => this.setState({ pin: event.target.value })} placeholder="Pinkod" />
                        <input type="submit" value="Klicka!" id="customStartButton" />
                    </form>
                </div>
            </div>
        );
    }

}

export default CustomGameLeaderPage;