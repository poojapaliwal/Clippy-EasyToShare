function TempSocket(socket) {
    socket.emit("sentToClientMessage",{text:String("Hello, Pushpendra")});
    
    socket.on('sentFromClientMessage', function(data) {
      console.log(data)
      socket.broadcast.emit('sentFromServerMessage',{data});
    });
  
  
  };
module.exports = TempSocket;