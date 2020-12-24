var app = require('express')();
var http = require('http').createServer(app);

var io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
  });

io.on('connection', (socket) => {
    socket.on('location', (loc) => {
      console.log('location: ' + loc);
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});