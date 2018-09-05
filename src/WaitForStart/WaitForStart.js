import React, { Component } from 'react';
import './WaitForStart.css';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import axios from 'axios';


class WaitForStart extends Component {
    state = {
        names: []
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
                name: this.state.names
            };
    
            axios.get('http://localhost:8080/questions') //Ska hämta namn, men hämtar frågor och låtlänkar
                .then(response => {
                    this.setState({names: response.data});
                   // console.log(response);
                })
        }

        const names = this.state.names.map( name => {
            return <div title={name.name}/>
        });
        
        return <div>
            <div>
                <h1 className="headline">
                    Väntar på att spelledaren ska starta spel
                </h1>
            </div>
            <div className="spinner">
                <ReactSpinner />
            </div>
            <div>
                {names}
                </div>

        </div>

    }
}


export default WaitForStart; 