const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name:String,
    username:String,
    profilePic:String,
    about:String,
    phone:Number,
    email:String,
    lastConnection:String,
    contacts:[String],
    lastLoginTime:String,
    lastSeen:String,
    status:String
});

const User = mongoose.model('users', UserSchema);

module.exports = User