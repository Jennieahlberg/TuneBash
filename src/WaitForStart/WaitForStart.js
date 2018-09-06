import React, { Component } from 'react';
import './WaitForStart.css';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import axios from 'axios';


class WaitForStart extends Component {
    state = {
        name: '',
    }

    constructor(props) {
        super(props);
        this.state = { members: true }
      }

    render() {
        const members = this.state.members;

        if(members){
            const names = {
                gameId: this.state.gameId,
                name: this.state.name
            };
    
            /*axios.get('http://localhost:8080/questions') //FUNKAR INTE RIKTIGT
                .then(response => {
                    console.log(response);
                })
            console.log(names);*/
        }
        
        
        return <div>
            <div>
                <h1 className="headline">
                    Väntar på att spelledaren ska starta spel
                </h1>
            </div>
            <div className="spinner">
                <ReactSpinner />
            </div>

        </div>

    }
}


export default WaitForStart; 