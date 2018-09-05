/*Jag vet inte om detta är ngt som vi ska använda*/

/*let connection = new WebSocket('wss:localhost:3000');

connection.onopen=function('/app'){}*/
let stompClient = require('./websocket-listener');

define(function(require) {
	'use strict';

	let SockJS = require('sockjs-client'); (1)
	require('stomp-websocket'); (2)

	return {
		register: register
	};

	function register(registrations) {
		let socket = SockJS(/*NGT ANNAT*/'/payroll'); (3)
		let stompClient = Stomp.over(socket);
		stompClient.connect({}, function(frame) {
			registrations.forEach(function (registration) { (4)
			  stompClient.subscribe(registration.route, registration.callback);
			});
		});
	}

});