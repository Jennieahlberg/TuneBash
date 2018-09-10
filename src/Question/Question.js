import React, { Component } from "react";
import "./Question.css";
import io from 'socket.io-client';

const socketUrl = "http://localhost:3231"
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { usersArray: [] };
    this.state = { socket: io(socketUrl) };
    this.state = { value: "" };
  }

  componentWillMount() {
    this.initSocket();
    this.onSocket(); 
  }

  onSocket = () => {
    this.state.socket.on('user joined', (data) => {
      console.log(data);
      this.setState({ usersArray: data.users });
    });
  }

  submitAnswer(event) {
    for (let user of this.usersArray){
      if (event.target.value = this.question.correctAnswer) {
      user[1]++;
      }
      user[user.length] = event.target.value;
    }
  }

  render() {
    const question = this.props.question;
    return (
      <div className="Question">
        <iframe
          src={question.songLink}
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <div className="Question_question">
          <form>
            <p> {question.question}</p>

            <button className="answerButton" value={this.state.value} onClick={this.submitAnswer}>
              {question.correctAnswer}
            </button>
            <button className="answerButton" value={this.state.value} onClick={this.submitAnswer}>
              {question.wrongAnswer1}
            </button>
            <button className="answerButton" value={this.state.value} onClick={this.submitAnswer}>
              {question.wrongAnswer2}
            </button>
            <button className="answerButton" value={this.state.value} onClick={this.submitAnswer}>
              {question.wrongAnswer3}
            </button>
          </form>
        </div>
        <div className="next">
        <button onClick={this.props.nextQuestion}>Nästa fråga</button>
        </div>
      </div>
    );
  }
}

export default Question;
