const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
let UserModel = require("./../models/user");
let {SECRETKEY} = require("./../settings/config");

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


class Error{
    constructor(code,msg){
        this.code = code;
        this.msg = msg;
    }
}


let middleWare = function(request,response,next){
    next();
}
router.get("/login",middleWare,(request,response)=>{
    response.json({s:"S"})
})
router.options("/register",(request,response)=>{
    console.log(request.headers)

    if(request.method == "OPTIONS"){
        
    // console.log("haa bhaiya aayi thi yaaha request")
    // request.headers.append
     // Website you wish to allow to connect
     response.setHeader('Access-Control-Allow-Origin', '*');

     // Request methods you wish to allow
     response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     response.setHeader('Access-Control-Allow-Credentials', true);
     response.status(200).json({message:"Now CORS is taken care "})
    }
})
router.post("/register",async (request,response)=>{
    
    try{// Website you wish to allow to connect
        response.setHeader('Access-Control-Allow-Origin', '*');
   
        // Request methods you wish to allow
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        response.setHeader('Access-Control-Allow-Credentials', true);
            // response.setHeader("Access-Control-Allow-Origin", "*");
            // request.headers["access-control-request-headers"]
        if((typeof request == "object") && ('body' in request)){
            
            if('email' in request.body && 'password' in request.body){
                let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
                let emailValue = String(request.body.email);
                let passwordValue = String(request.body.password);
                if(emailRegex.test(emailValue) === true){

                        let dataFromRequest = await UserModel.countDocuments({ email: emailValue }).exec();
                        if(Number(dataFromRequest) === 0){
                            let newuser = new UserModel({name:"default name",
                                username:"defaultusername",
                                profilePic:"defaultpic",
                                about:"defaultstatus",
                                phone:0,
                                email:emailValue,
                                lastConnection:"defaultlastconnection",
                                contacts:["String"],
                                lastLoginTime:new Date(),
                                lastSeen:"String",
                                status:"String",
                                password:request.body.password});

                            let finalnewuser = await newuser.save();
                                newuser.password = "" // Clearing Password Field
                            var token = jwt.sign({ ...newuser }, SECRETKEY, {
                                expiresIn: 86400 // expires in 24 hours
                              });
                            response.status(200).json({jwtToken:token,user:finalnewuser}); 
                        }else{
                            if(Number(dataFromRequest) === 1){
                                let userFromDataBase = await UserModel.findOne({email:emailValue}).exec();
                                // console.log(userFromDataBase)
                                if(userFromDataBase.password == passwordValue){
                                    // Password Valid
                                    userFromDataBase.password = "";
                                    // console.log
                                    var token = jwt.sign({ ...userFromDataBase }, SECRETKEY, {
                                        expiresIn: 86400 // expires in 24 hours
                                      });
                                    response.status(200).json({jwtToken:token,user:userFromDataBase});

                                }else{
                                    // Invalid Password
                                    throw new Error(302,"Incorrect Password")
                                }


                            }else{
                                throw new Error(303,"Mutiple Objects with same Email Address Found !!")
                            }
                        }

                }else{
                    throw new Error(302,"Invalid Email Syntax");
                }
            }else{
                throw new Error(301,'Required Fields Missing !!');
            }



        }else{
            throw new Error(401,"Incorrect JSON Body")
        }
    }catch(error){
        console.log(error)
        response.status(error.code ? error.code : 400).send(error);
    }
})



module.exports = router;