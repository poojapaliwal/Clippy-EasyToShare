const User = require("./../models/user");

let UserModel = require("./../models/user");

function TempSocket(socket) {
    
    socket.on('setSocketIDToEmail', function(data) {
      console.log(data,socket.id)
      UserModel.updateOne({email:data.email},{lastConnection:socket.id},(err,raw)=>{
          if(err){
              console.log("Error While Updating Socket ID")
          }else{
              console.log("Socket Saved")
          }
      })
    });
  
  
  };
module.exports = TempSocket;