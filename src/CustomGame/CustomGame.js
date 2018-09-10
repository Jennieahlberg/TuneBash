import React, { Component } from 'react';
import './CustomGame.css';
import axios from 'axios';
import YourCustomGame from '../YourCustomGame/YourCustomGame';

class CustomGame extends Component {
    state = {
        numberOfQuestions: 0,
        lengthOfSong: '',
        songLink: '',
        question: '',
        correctAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: ''
    }

    constructor(props) {
        super(props);

        this.onClickGenerate = this.onClickGenerate.bind(this);
        this.state = { yourCustomGame: false };

    }

    onClickGenerate = () => {
        const customGame = {
            numberOfQuestions: this.state.numberOfQuestions,
            lengthOfSong: this.state.lengthOfSong,
            songLink: this.state.songLink,
            question: this.state.question,
            correctAnswer: this.state.correctAnswer,
            wrongAnswer1: this.state.wrongAnswer1,
            wrongAnswer2: this.state.wrongAnswer2,
            wrongAnswer3: this.state.wrongAnswer3
        }

        axios.post('http://localhost:8080/addcustomquestion', customGame)
        console.log(customGame);

        this.setState({ yourCustomGame: true });
    }

    render() {

        const yourCustomGame = this.state.yourCustomGame;

        if (yourCustomGame) {
            return (
                <div>
                    <YourCustomGame />
                </div>
            )
        }

        return (
            <div>
                <div>
                    <p className="headlineCustomGame">
                        Skapa ett quiz med dina egna frågor
                </p>
                </div>

                <div className="form">
                    <div className="select">
                        <form onSubmit={this.onClickGenerate}>
                            <p>
                                <select value={this.state.numberOfQuestions} onChange={(event) => this.setState({ numberOfQuestions: event.target.value })} required name="numberOfQuestions">
                                    <option value="numberOfQusetions">Antal frågor</option>
                                    <option value="5">5 frågor</option>
                                    <option value="10">10 frågor</option>
                                    <option value="15">15 frågor</option>
                                    <option value="20">20 frågor</option>
                                </select>
                            </p>

                            <p><select value={this.state.lengthOfSong} onChange={(event) => this.setState({ lengthOfSong: event.target.value })} required name="lengthOfSong">
                                <option value="låtlängd">Låtlängd</option>
                                <option value="10">10 sek</option>
                                <option value="30">30 sek</option>
                                <option value="1">1 min</option>
                                <option value="fullLängd">Hela låten</option>
                            </select>
                            </p>


                            <p><input value={this.state.songLink} onChange={(event) => this.setState({ songLink: event.target.value })} required type="text" placeholder="Låtlänk från Spotify" /></p>
                            <p><input value={this.state.question} onChange={(event) => this.setState({ question: event.target.value })} required type="text" placeholder="Fråga" /></p>
                            <p><input value={this.state.correctAnswer} onChange={(event) => this.setState({ correctAnswer: event.target.value })} required type="text" placeholder="Rätt svar" /></p>
                            <p><input value={this.state.wrongAnswer1} onChange={(event) => this.setState({ wrongAnswer1: event.target.value })} required type="text" placeholder="Fel svar 1" /></p>
                            <p><input value={this.state.wrongAnswer2} onChange={(event) => this.setState({ wrongAnswer2: event.target.value })} required type="text" placeholder="Fel svar 2" /></p>
                            <p><input value={this.state.wrongAnswer3} onChange={(event) => this.setState({ wrongAnswer3: event.target.value })} required type="text" placeholder="Fel svar 3" /></p>

                            <div>
                                <input type="submit" value="Skapa pinkod" id="createPinCode" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );

    }
}

export default CustomGame; 