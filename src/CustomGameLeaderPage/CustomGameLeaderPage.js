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
            gameId: ''
        }

    }

    startCustomGame = () => {
        console.log('I metoden startCustomGame');
        console.log(this.state.gameId);
        this.setState({ letsplay: true });
    }

    render() {
        const letsplay = this.state.letsplay;

        if (letsplay) {
            return (
                <div>
                    <GameLeaderPage gameId={this.state.gameId} />
                </div>
            );
        }

        return (
            <div>
                <div>
                    <p className="infoMessage">
                        Slå in pinkoden som du fick när du gjorde ditt egna quiz.
                            </p>
                </div>
                <div className="formDivCustomStart">
                    <form onSubmit={this.startCustomGame}>
                        <div>
                            <input id="inputCustomPin" type="text" required pattern="[0-9]{6,6}" title="Pinkoden ska bestå av sex siffror" value={this.state.gameId}
                                      onChange={(event) => this.setState({gameId: event.target.value})} placeholder="Pinkod"/>
                        </div>
                        <div>
                            <input type="submit" value="Spela!" id="customStartButton" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default CustomGameLeaderPage;