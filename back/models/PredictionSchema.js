var mongoose = require('mongoose');
var valid=require('validator')
var PredictionSchema= mongoose.Schema({
    ARSON:{type:Number}
    
    });

module.exports =mongoose.model('Prediction',PredictionSchema);
