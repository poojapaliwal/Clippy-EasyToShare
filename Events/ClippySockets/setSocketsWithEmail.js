const User = require("./../../models/user");

let UserModel = require("./../../models/user");

function TempSocket(socket) {
    
    socket.on('Clippy_setSocketsEmail', function(data) {
        console.log(data)
    });
  
  
  };
module.exports = TempSocket;