import React, { Component } from "react";
import "./GameResults.css";



class GameResults extends Component{

render(){

    return(
        <div>
            {this.state.results.map(result =>{
                return
                    <p>user = {result.username} finalResult = {result.result}</p>
            })}
        </div>

    )
}
}

export default GameResults;