/*  All Library Imports */
/* ======================= Currently Not Using Message Queue ================ */
let {PORT} = require("./settings/config");

var app = require('express')(PORT);
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

/* DB Connections */
let {MONGODB_URI} = require("./settings/config");




/* Below Connection Starts */
// Database Connection
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Connected on MONGODB_URI:",MONGODB_URI);
});
// Socket Connection
io.on('connection',socket=>{
  
  console.log("User's Connected - ",io.engine.clientsCount);
  require("./Events/Messages/sendMessageEvent")(socket); // to Send Message Related Work
  require("./Events/setSocketID")(socket); // to Register socketID with Email
  require("./Events/getAllUsers")(socket); // to getAllUsers
})
// HTTP SERVER
http.listen(PORT, () => {
  console.log('HTTP Server Started on *:',PORT);
});


/* Application Responses */


// Adding Dependencies, Middlewares 
app.use((req, res, next) => {
  bodyParser.json()(req, res, err => {
      if (err) {
          // console.error(err);
          return res.sendStatus(400); // Bad request
      }
      next();
  });
});
/* ----------- Body Parser JSON Error ------------- */

const mainRoutes = require("./routes/routes");
app.use("/api",mainRoutes);
app.get("/tets",(req,res)=>{
  res.send("S");
})


app.use("/",express.static(__dirname + "/web/"));
