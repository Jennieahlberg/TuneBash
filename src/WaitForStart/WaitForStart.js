import React, { Component } from "react";
import "./WaitForStart.css";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import axios from "axios";
import { VERIFY_USER, LOGOUT } from "../Events";
import io from 'socket.io-client';
import Quiz from "../Quiz/Quiz";

const socketUrl = "http://localhost:3231"
class WaitForStart extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      members: true,
      usersArray: [],
      socket: io(socketUrl),
      start: false,
      questions: []
      };
  }

  componentWillMount() {
    this.initSocket();
    this.onSocket();
    this.startgame();
  }

  initSocket = () => {
    this.state.socket.on('connect', () => {
      console.log("Connected");
    })
    this.state.socket.emit('add user', this.props.name);
  }

  onSocket = () => {
    this.state.socket.on('user joined', (data) => {
      console.log(data);
      this.setState({ usersArray: data.users });
    }); 
  }

  startgame() {
    this.state.socket.on('gameStarts', (data, questiones, users) => {
      this.setState({start: data, questions: questiones, usersArray: users });
    })
    console.log("startgame " + this.state.start);
  }

  // setUser = (user) => {
  //   console.log(user);
  //   const { socket } = this.state
  //   this.setState({ user })
  // }

  // logout = () => {
  //   const { socket, user } = this.state
  //   socket.emit(LOGOUT)
  //   this.setState({ user: null })
  // }

  render() {
    const members = this.state.members;
   // let { socket, user } = this.state
    console.log("userArray: " + this.state.usersArray);
    

    if (members) {
      const names = {
        gameId: this.props.gameId,
        name: this.props.name
      };

      /*axios.get('http://localhost:8080/questions') //FUNKAR INTE RIKTIGT
                .then(response => {
                    console.log(response);
                })
            console.log(names);*/
    }
    // let nameContainer = this.state.usersArray;
    // let names = nameContainer.map(function(name){
    //   return <li>{name}</li>;
    // })

    if (this.state.start) {
      return (
        <Quiz
          questions={this.state.questions}
          usersArray={this.state.usersArray}
        />
      );
    }
    

    return (
      <div>
        <div>
          <h1 className="headline">
            Väntar på att spelledaren ska starta spel
          </h1>
        </div>
        <div className="spinner">
          <ReactSpinner />
        </div>
        <div className="names">
          {this.state.usersArray}
        </div>
      </div>
    );
  }
}

export default WaitForStart;
