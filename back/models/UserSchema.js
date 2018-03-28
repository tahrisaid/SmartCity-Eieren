var mongoose = require('mongoose');
var valid=require('validator')
var UserSchema=mongoose.Schema({

    email:{type:String,required:true,minlength:1,trim:true,unique:true,
        validate:{
        validator:valid.isEmail,
        message:'{VALUE} is not a valid email'
    }},
    password:{type:String,required:true,minlength:6}

});
module.exports =mongoose.model('User',UserSchema);