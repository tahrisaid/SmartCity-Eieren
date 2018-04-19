

var mongoose = require('mongoose');
var objectSchema=mongoose.Schema({
    name:{type:String,required:true,minlength:1,trim:true},
    description:{type:String,required:true,minlength:1,trim:true},
    degree:{type:String,required:true,minlength:1,trim:true},
    thread:{type:String,required:true,minlength:1,trim:true},
    dateAjout:{type:Date,default:Date.now()},
    img:{ type: Buffer, contentType: String},
    pathOfImg:{type:String},
    nameOfImg:{type:String}
    
});


module.exports =mongoose.model('Object',objectSchema);