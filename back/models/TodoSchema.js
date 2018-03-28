var mongoose = require('mongoose');

var media = new mongoose.Schema({
    name: {type:String,required:true,minlength:1,trim:true},
    uploadDate:{type:Date,default: Date.now}
});
var todoSchema=mongoose.Schema({

    text:{type:String,required:true,minlength:1,trim:true},
    completed:{type:Boolean,default:false},
    completedAt:{type:Number,default:null},
    Media: media,
    createdBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

//caezd//
module.exports =mongoose.model('Todo',todoSchema);