var mongoose = require('mongoose');
var valid=require('validator')
var predictModelSchema=mongoose.Schema({


    ARSON:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    BAD_CHECKS:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    ASSAULT:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    BRIBERY:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    BURGLARY:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    DRUNKENNES:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    EMBEZZLLEMENT:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    EXTORTION:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    FRAUD:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    GAMBLING:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    KIDNAPPING:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    LOITERING:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    PROSTITUTION:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    ROBBERY:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    RUNAWAY:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    SUICIDE:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    TREA:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    TRESPASS:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    VANDALISM:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    WARRANTS:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    WEAPON_LAWS:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    BAD_CHECKS:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    DISORDERLY_CONDUCT:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    DRIVING_UNDER_THE_INFLUENCE:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    DRUG_NARCOTIC:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    FORGERY_COUNTERFEITING:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    LARCENY_THEFT:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    PORNOGRAPHY_OBSCENE_MAT:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    FAMILY_OFFENSES:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    LIQUOR_LAWS:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    MISSING_PERSON:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }},
    NON_CRIMINAL:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    OTHER_OFFENSES:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    RECOVERE_VEHICLE:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    SECONDARY_CODES:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    SEX_OFFENSES_FORCIBLE:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    SEX_OFFENSES_NON_FORCIBLE:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    STOLEN_PROPERTY:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    SUSPICIOUS_OCC:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}
    ,
    VEHICLE_THEFT:{type:Number,
        validate:{
        validator:valid.isNumeric,
        message:'{VALUE} is not a valid proba'
    }}

});
module.exports =mongoose.model('PredictModel',predictModelSchema);