const User = require("./../../models/user");

let UserModel = require("./../../models/user");

function TempSocket(socket,io) {
    // Acceps Data
    // With Following Data
    /*  // Socket ID is there with
        data = {
            user:userObject,
            token:String
        }



    */
   
 
        // io.emit("mainRoomData",{user:{name:"SDF"}})
   socket.emit("message",{S:"SDF"})
        
    socket.on('Clippy_setSocketsEmail', function(data) {
        
        // console.log(data)
        socket.on("disconnect",(data)=>{
            UserModel.find({contacts:socket.id},(err,doc)=>{
                if(err){
                    console.log("ERR")
                }else{
                    // console.log(doc)
                    doc.forEach(eachDocument => {
                        for(let i = 0; i < eachDocument.contacts.length; i++){
                            // console.log(eachDocument.contacts[i])
                            eachDocument.contacts[i] = "0"
                        }
                        eachDocument.update({$set:{"contacts.$":"0"}})
                    });
                }
            })
                
            
            
        })
        // this data has
        try{
            UserModel.findOne({email:data.user.email},async (error,document)=>{
                if(error){
                    console.log('Socket Error')
                }else{
                    // console.log(document)
                    if(document){
                        let contacts = document.contacts
                        let flagGot = false;
                        for(let i=0;i < contacts.length; i++)
                        {
                            if(socket.id == contacts[i]){
                                flagGot = true;
                            }
                        }
                        if(flagGot == false){
                            // console.log("SDF")
                            let final = await UserModel.updateOne({email:data.user.email},{$push:{contacts:socket.id}}).exec();
                            console.log("new socket Id pushed to DB")
                        }
                    }
                }
            }).exec()
        }catch(e){
            console.log(e)
        }
    });
  
  
  };
module.exports = TempSocket;