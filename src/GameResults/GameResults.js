import React, {Component} from "react";
import HomeButton from '../HomeButton/HomeButton';

class GameResults extends Component {
    constructor(props) {
        super(props);

    }

    sortResults = () => {
        this.props.usersArray.sort((a, b) => {
            return b[1] - a[1];
        })
    };


    render() {
        this.sortResults();
        return (
            <div>

                <p> Resultat:</p>

                {this.props.usersArray.map((result) => {
                    return (<p>{result[0]} {result[1]} poäng</p>)
                })}

                <p></p>
                {this.props.questions.map((questionsAndAnwers) => {
                        return <p>{questionsAndAnwers.question} Rätt svar: {questionsAndAnwers.correctAnswer}</p>
                    }
                )}
                <HomeButton/>
            </div>


        );
    }

}

export default GameResults;
