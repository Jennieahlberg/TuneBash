const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval, name) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', 'gustaf');
            let names = [];
            names.push(name);
            client.emit('names', names);
        }, interval);
    });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);