

var mongoose = require('mongoose');
var DetectedObjectSchema=mongoose.Schema({
    id:{type:String},
    name:{type:String,required:true,minlength:1,trim:true},

});


module.exports =mongoose.model('DetectedObject',DetectedObjectSchema);