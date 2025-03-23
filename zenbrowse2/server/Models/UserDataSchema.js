const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    USER_UID : {
        type: String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        required : true
    },
    name : {
        type : String,
        require : true ,
    },
    todos : {
        type : Array ,
        default : []
    },
    Recents : {
        type : Array,
        default : []
    },
    Bookmarks : {
        type : Array,
        default : []
    }
})

const DATA_MODEL = new mongoose.model('USER_DATA',UserSchema);

module.exports = DATA_MODEL;