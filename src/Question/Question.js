import React, {Component} from "react";
import "./Question.css";
import Line from './Progressbar/Line';

class Question extends Component {
    state = {
        answer: "japps",
        question: "sugen på blåbär?"
        currentCount: 0,
    };
    // constructor(props){
    //     super(props)
    // }

    
componentDidMount = () => {
    var intervalId = setInterval(this.timer, 50);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  };
  
  componentWillUnmount = () => {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  };
  
  timer = () => {
    // setState method is used to update the state
    var newCount = this.state.currentCount + 1;
    if(newCount <= 100) { 
        this.setState({ currentCount: newCount });
    } else {
        clearInterval(this.state.intervalId);
    }
  };

    submitAnswer = () => {
    }

    render() {
        const answer = this.state.answer
        const question = this.state.question
            return (
                <div className="Question">
                  <Line percent={this.state.currentCount} strokeWidth="2" strokeColor="#333333"/>
                    <div className="Question_question">
                        <form>

                            <p> {question}</p>

                            <button className=" answerButton" onClick={this.submitAnswer}>{answer}</button>
                            <button className=" answerButton" onClick={this.submitAnswer}>{answer}</button>
                            <button className=" answerButton" onClick={this.submitAnswer}>{answer}</button>
                            <button className=" answerButton" onClick={this.submitAnswer}>{answer}</button>
                        </form>

                    </div>
                </div>
            );
        }
    }



export default Question;