

var mongoose = require('mongoose');
var claimSchema=mongoose.Schema({
    object:{type:String,required:true,minlength:1,trim:true},
    email:{type:String,required:true,minlength:1,trim:true},
    content:{type:String,required:true,minlength:1,trim:true},
    place:{type:String},
    lat:{type:String},
    long:{type:String},
    dateAjout:{type:Date,default:Date.now()},
    claimedBy:{type:mongoose.Schema.Types.ObjectId,ref:'Account'}
    
});
module.exports =mongoose.model('Claim',claimSchema);