const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
  const io = socketio(server);

  io.on('connection', socket => {
    console.log("Connected");
    
    console.log(socket.id);
    console.log(socket.handshake.query);
  });

  console.log();
};