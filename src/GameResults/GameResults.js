import React, { Component } from "react";
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
    console.log(this.props.usersArray);
    console.log(this.props.questions);
    return (
      <div>
          {/*<h1>Vinnare:{this.props.usersArray[0][0]} med {this.props.usersArray[0][1]} poäng!</h1>*/}

          <p> Resultat:</p>

        {this.props.usersArray.map((result) => {
           return(<p>{result[0]} {result[1]} poäng</p>)})}

           <p></p>
          {this.props.questions.map((questionsAndAnwers) =>{
              return <p>{questionsAndAnwers.question} Rätt svar: {questionsAndAnwers.correctAnswer}</p>
              }
          )}
          <HomeButton/>
      </div>  
    );
  }
}

export default GameResults;
