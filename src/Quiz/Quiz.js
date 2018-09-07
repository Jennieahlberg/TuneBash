import React, {Component} from 'react';
import './Quiz.css';
import Question from '../Question/Question';

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.renderQuestions = this.renderQuestions.bind(this);
    }
    
    renderQuestions(question) {
        return (
            <div className="col-md-6" key={question.id}>
                <Question
                    question={question}
                ></Question>
            </div>
        );
    }
    
    render() {
    return (<div>
                {this.props.questions
                .map(this.renderQuestions)}
    </div>);
    }
}

export default Quiz; 