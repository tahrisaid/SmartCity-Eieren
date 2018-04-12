var mongoose = require('mongoose');
var valid=require('validator')
var crimeSchema=mongoose.Schema({
    X:{type:Number,
        },
    Y:{type:Number,
        }
    ,
    Address:{type:String,
        },
        Dates:{type:String,
            },
            Category:{type:String,
                },
                Descript:{type:String,
                    },
                    DayOfWeek:{type:String,
                        },
                        PdDistrict :{type:String,
                            },
                            Resolution:{type:String,
                                }
    
});
module.exports=mongoose.model('crimes',crimeSchema);