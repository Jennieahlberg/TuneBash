import React from 'react';
import './Quiz.css';

const quiz = () => {
    return <div>
        <div className="question-container">
        <div className="question">
            <p>Johnny Cash spelade in denna låt på delstatsfängelset Folsom Prison, fängelset öppnade år 1880 men i vilken delstat?</p>
        </div>
        </div>
        <div className="answers">
            <ul>
                <a href=""><li>Kalifornien</li></a>
                <a href=""><li>Florida</li></a>
                <a href=""><li>Utah</li></a>
                <a href=""><li>Oregon</li></a>
            </ul>
        </div>
    </div>
}

export default quiz; 