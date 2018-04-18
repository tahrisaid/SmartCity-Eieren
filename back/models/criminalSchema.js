var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 4);

var criminalSchema=mongoose.Schema({
    gallery:{type:String,required:true,minlength:1,trim:true},
    confidence:{type:Float,required:true,minlength:1,trim:true},
	age:{type:Number,required:true},
    glasses:{type:String,required:true},
    white:{type:Float,required:true},
    black:{type:Float,required:true},
    asian:{type:Float,required:true},
    hispanic:{type:Float,required:true},
    other:{type:Float,required:true},
	gender:{type:String,required:true,minlength:1,trim:true},
    updateDate:{type:Date,default:Date.now()},
    recognitions:[{    confidence:{type:String,required:true,minlength:1,trim:true},
                       viewed:{type:String,required:true,minlength:1,trim:true,default:"Not yet"},
                       recognitionDate:{type:Date,default:Date.now()}
                }]
});


module.exports =mongoose.model('Criminal',criminalSchema);