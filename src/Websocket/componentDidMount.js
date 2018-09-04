/*Jag vet inte om detta är ngt som vi ska använda*/

import React from 'react';
/*
const componentDidMount = () => {
    this.loadFromServer(this.state.pageSize);
    stompClient.register([
        { route: '/topic/newEmployee', callback: this.refreshAndGoToLastPage },
        { route: '/topic/updateEmployee', callback: this.refreshCurrentPage },
        { route: '/topic/deleteEmployee', callback: this.refreshCurrentPage }
    ]);
}*/

let stompClient = null;

setConnected = (connected) => {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

connect = () => {
    let socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

disconnect = () => {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

sendName = () => {
    stompClient.send("/app/hello", {}, JSON.stringify({ 'name': $("#name").val() }));
}

showGreeting = (message) => {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $("#connect").click(function () { connect(); });
    $("#disconnect").click(function () { disconnect(); });
    $("#send").click(function () { sendName(); });
});
