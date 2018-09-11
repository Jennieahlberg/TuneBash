import React, { Component } from 'react';
import './CustomGame.css';
import axios from 'axios';
import YourCustomGame from '../YourCustomGame/YourCustomGame';
import HomeButton from "../HomeButton/HomeButton";

class CustomGame extends Component {
    state = {
        songLink: '',
        question: '',
        correctAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: ''
    }

    constructor(props) {
        super(props);

        // this.onClickGenerate = this.onClickGenerate.bind(this);
        this.addToQuiz = this.addToQuiz.bind(this);
        this.state = {
            yourCustomGame: false,
            quizArray: []
        };

    }

    addToQuiz = () => {
        let newArray = [];
        const customGame = {
            songLink: this.state.songLink,
            question: this.state.question,
            correctAnswer: this.state.correctAnswer,
            wrongAnswer1: this.state.wrongAnswer1,
            wrongAnswer2: this.state.wrongAnswer2,
            wrongAnswer3: this.state.wrongAnswer3
        }

        newArray.push(customGame);

        console.log(newArray);

        this.state.quizArray.push(newArray);

        console.log(this.state.quizArray);

        this.setState({
            songLink: '',
            question: '',
            correctAnswer: '',
            wrongAnswer1: '',
            wrongAnswer2: '',
            wrongAnswer3: ''
        })

    }

    onClickGenerate = () => {
        let newArray = [];
        const customGame = {
            songLink: this.state.songLink,
            question: this.state.question,
            correctAnswer: this.state.correctAnswer,
            wrongAnswer1: this.state.wrongAnswer1,
            wrongAnswer2: this.state.wrongAnswer2,
            wrongAnswer3: this.state.wrongAnswer3
        }

        newArray.push(customGame);

        console.log(newArray);

        this.state.quizArray.push(newArray);

        console.log(this.state.quizArray);

        axios.post('http://localhost:8080/addcustomquestion', this.state.quizArray)
        console.log(this.state.quizArray);

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

                            <p><input className="customRow" value={this.state.songLink} onChange={(event) => this.setState({ songLink: event.target.value })} required type="text" placeholder="Låtlänk från Spotify" /></p>
                            <p><input className="customRow" value={this.state.question} onChange={(event) => this.setState({ question: event.target.value })} required type="text" placeholder="Fråga" /></p>
                            <p><input className="customRow" value={this.state.correctAnswer} onChange={(event) => this.setState({ correctAnswer: event.target.value })} required type="text" placeholder="Rätt svar" /></p>
                            <p><input className="customRow" value={this.state.wrongAnswer1} onChange={(event) => this.setState({ wrongAnswer1: event.target.value })} required type="text" placeholder="Fel svar 1" /></p>
                            <p><input className="customRow" value={this.state.wrongAnswer2} onChange={(event) => this.setState({ wrongAnswer2: event.target.value })} required type="text" placeholder="Fel svar 2" /></p>
                            <p><input className="customRow" value={this.state.wrongAnswer3} onChange={(event) => this.setState({ wrongAnswer3: event.target.value })} required type="text" placeholder="Fel svar 3" /></p>

                            <div>
                                <input type="submit" value="Skapa quiz" id="createPinCodeCustom" />
                                <button id="addCustomQuestion" onClick={this.addToQuiz}>Lägg till fråga</button>
                            </div>
                        </form>

                    </div>
                </div>

                <HomeButton />

            </div>
        );

    }
}

export default CustomGame; 