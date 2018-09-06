import React, {Component} from "react";
import "./Question.css";

class Question extends Component {
    state = {
        answer: "japps",
        question: "sugen på blåbär?"
    };
    // constructor(props){
    //     super(props)
    // }

    submitAnswer = () => {
    }

    render() {
        const answer = this.state.answer
        const question = this.state.question
            return (
                <div className="Question">

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