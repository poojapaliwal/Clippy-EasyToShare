const User = require("./../../models/user");

let UserModel = require("./../../models/user");

function TempSocket(socket,io) {
    
    socket.on('messageFromClientToAll', function(data) {
      console.log(data,socket.id)
      io.emit("messageToAllFromOneClient",{data:data,from:socket.id});
    });
  
    
  
  };
module.exports = TempSocket;