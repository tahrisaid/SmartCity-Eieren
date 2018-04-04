

var mongoose = require('mongoose');
var objectSchema=mongoose.Schema({
    name:{type:String,required:true,minlength:1,trim:true},
    description:{type:String,required:true,minlength:1,trim:true},
    degree:{type:String,required:true,minlength:1,trim:true},
    thread:{type:String,required:true,minlength:1,trim:true},
    dateAjout:{type:Date,default:Date.now()},
    img:{ data: Buffer, contentType: String }
    
});


module.exports =mongoose.model('Object',objectSchema);