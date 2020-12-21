const User = require("./../models/user");

let UserModel = require("./../models/user");

function TempSocket(socket) {
    
    socket.on('getAllUsers', function(data) {
      console.log(data,socket.id)
      UserModel.find({},"name email lastConnection lastLoginTime profilePic",(err,raw)=>{
          if(err){
              console.log("Error While Updating Socket ID")
          }else{
              socket.emit("allUsersTillDate",raw)
          }
      })
    });
  
    
  
  };
module.exports = TempSocket;