

var mongoose = require('mongoose');
var objectSchema=mongoose.Schema({
    name:{type:String,required:true,minlength:1,trim:true},
    description:{type:String,required:true,minlength:1,trim:true},
    thread:{type:Boolean,default:false},
    dateAjout:{type:Date,default:Date.now()}
});
module.exports =mongoose.model('Object',objectSchema);