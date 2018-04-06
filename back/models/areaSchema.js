var mongoose = require('mongoose');

var areaSchema=mongoose.Schema({
	name:{type:String,required:true,minlength:1,trim:true},
    cameraName:{type:String,required:true,minlength:1,trim:true},
	status:{type:String,required:true,minlength:1,trim:true},
    address:{type:String,required:true,minlength:1,trim:true},
	crimeRate:{type:Number,default:0},
    updateDate:{type:Date,default:Date.now()}

});


module.exports =mongoose.model('Area',areaSchema);