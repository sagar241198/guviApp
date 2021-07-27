const mongoose = require('mongoose')

userSchema = mongoose.Schema({
    Fname:{
        type:String,
        require:true
    },
    Lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    }
});
module.exports = mongoose.model("user",userSchema);