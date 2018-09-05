import React from 'react';
var stompClient = require('./websocket-listener')

define = (require) => {
	'use strict';

	let SockJS = require('sockjs-client'); (1)
	require('stomp-websocket'); (2)

	return {
		register: register
	};

	function register(registrations) {
		let socket = SockJS('/members'); (3)
		let stompClient = Stomp.over(socket);
		stompClient.connect({}, function(frame) {
			registrations.forEach(function (registration) { (4)
			  stompClient.subscribe(registration.route, registration.callback);
			});
		});
	}
};

componentDidMount = () => {
    this.loadFromServer(this.state.pageSize);
    stompClient.register([
        {route: '/app/members', callback: this.refreshAndAddName},
        {route: '/topic/', callback: this.refreshCurrentPage},
        {route: '/topic/', callback: this.refreshCurrentPage}
    ]);
}

//Funktioner:

refreshAndAddName = () => {
    axios.post('/app/members')
}

refreshAndStartGame = () => {

}

refreshAndGetNextQuestion = () => {

}

refreshAndShowResult = () => {

}

refreshAndEndGame = () => {

}