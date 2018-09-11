import React, { Component } from "react";

class AnswersInText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffle: true
    };
  }

  shuffleAnswers = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ shuffle: false });
    return array;
  };

  render() {
    const question = this.props.question;

    const answers = [
      question.correctAnswer,
      question.wrongAnswer1,
      question.wrongAnswer2,
      question.wrongAnswer3
    ];

    if (this.state.shuffle) {
      this.shuffleAnswers(answers);
    }
    return (
      <div>
        <h3>Svarsalternativ</h3>
        {answers[0]}
        {answers[1]}
        {answers[2]}
        {answers[3]}
      </div>
    );
  }
}

export default AnswersInText;
