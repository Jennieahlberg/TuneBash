import React from 'react';
import './Quiz.css';

const quiz = () => {
    this.state = { quiz: [] };
    
    return (<div>
                {this.props.questions
                    .filter(e => e.isvisible === "true")
                    .filter(e => e.namn.toLowerCase()
                    .indexOf(this.props.search.toLowerCase()) !== -1)
                    .map(this.renderQuestions)}
    </div>);
}

export default quiz; 