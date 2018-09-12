import React, {Component} from "react";
import "./GameResults.css";


class GameResults extends Component {

    state = {
        results: [{name: 'arne', score: 10},
            {name: 'lasse', score: 5},
            {name: 'gunilla', score: 18},
            {name: 'barbro', score: 12}]
    };

    sortResults = () =>{
        this.state.results.sort((a, b) => Number(b.score) - Number(a.score));
    }


    render() {
        this.sortResults()
        return (
            <div>
                {this.state.results.map(result => {
                    return <p>{result.name} {result.score}</p>
                })}
            </div>
        );

    }
}

export default GameResults;