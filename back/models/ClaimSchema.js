

var mongoose = require('mongoose');
var claimSchema=mongoose.Schema({
    object:{type:String,required:true,minlength:1,trim:true},
    email:{type:String,required:true,minlength:1,trim:true},
    content:{type:String,required:true,minlength:1,trim:true},
    dateAjout:{type:Date,default:Date.now()}
    
});
module.exports =mongoose.model('Claim',claimSchema);