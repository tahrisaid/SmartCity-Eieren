var User=require('./../models/predictModelSchema');
var express = require('express');
var PythonShell = require('python-shell');

var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python', 
    pythonOptions: ['-u'],
    // make sure you use an absolute path for scriptPath
    scriptPath: 'C:/pythontest/models/research/object_detection',
    args: ['value1', 'value2', 'value3']
  };

var router = express.Router();


/*get all*/
router.get('/', function(req, res, next) {

    User.find( function (err,users) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!users) {
            res.status(404).send();
            console.log('users')
        }
        else {
            res.json(users);
            console.log('json')
        }

    });
});
/*get allllll*/
router.get('/all',function (req,res) {
    
    User.find().limit(1000).skip(0).exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
          
            res.json(user);

        }
    });
});
/*get sort by biggest*/
router.get('/sortbyall',function (req,res) {
    
    User.aggregate(
        [
          { $sort : { "ARSON": -1,
          "ASSAULT":  -1,
          "BRIBERY":  -1,
          "BURGLARY":  -1,
          "DRUNKENNESS":  -1,
          "EMBEZZLEMENT":  -1,
          "EXTORTION":  -1,
          "FRAUD":  -1,
          "GAMBLING":  -1,
          "KIDNAPPING":  -1,
          "LOITERING":  -1,
          "PROSTITUTION":  -1,
          "ROBBERY":  -1,
          "RUNAWAY":  -1,
          "SUICIDE":  -1,
          "TREA":  -1,
          "TRESPASS":  -1,
          "VANDALISM":  -1,
          "WARRANTS":  -1,
          "BAD_CHECKS":  -1,
          "DISORDERLY_CONDUCT":  -1,
          "DRIVING_UNDER_THE_INFLUENCE":  -1,
          "DRUG_NARCOTIC":  -1,
          "FORGERY_COUNTERFEITING":  -1,
          "LARCENY_THEFT":  -1,
          "FAMILY_OFFENSES":  -1,
          "LIQUOR_LAWS":  -1,
          "MISSING_PERSON":  -1,
          "NON_CRIMINAL":  -1,
          "OTHER_OFFENSES":  -1,
          "RECOVERE_VEHICLE":  -1,
          "SECONDARY_CODES":  -1,
          "SEX_OFFENSES_FORCIBLE":  -1,
          "SEX_OFFENSES_NON_FORCIBLE":  -1,
          "STOLEN_PROPERTY":  -1,
          "SUSPICIOUS_OCC":  -1,
          "VEHICLE_THEFT":  -1,
          "WEAPON_LAWS":  -1,
          "PORNOGRAPHY_OBSCENE_MAT":  -1 } }
        ]
     ).limit(1000).skip(0).exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*get somme allt*/
router.get('/somme',function (req,res) {
    
    User.aggregate(
        [           

           { totalAmount: { $sum: { $multiply: [ "ARSON",
          "ASSAULT",
          "BRIBERY",
          "BURGLARY",
          "DRUNKENNESS",
          "EMBEZZLEMENT",
          "EXTORTION",
          "FRAUD",
          "GAMBLING",
          "KIDNAPPING",
          "LOITERING" ,
          "PROSTITUTION",
          "ROBBERY",
          "RUNAWAY",
          "SUICIDE",
          "TREA",
          "TRESPASS",
          "VANDALISM",
          "WARRANTS",
          "BAD_CHECKS",
          "DISORDERLY_CONDUCT",
          "DRIVING_UNDER_THE_INFLUENCE",
          "DRUG_NARCOTIC",
          "FORGERY_COUNTERFEITING",
          "LARCENY_THEFT",
          "FAMILY_OFFENSES",
          "LIQUOR_LAWS",
          "MISSING_PERSON",
          "NON_CRIMINAL",
          "OTHER_OFFENSES",
          "RECOVERE_VEHICLE",
          "SECONDARY_CODES",
          "SEX_OFFENSES_FORCIBLE",
          "SEX_OFFENSES_NON_FORCIBLE",
          "STOLEN_PROPERTY",
          "SUSPICIOUS_OCC",
          "VEHICLE_THEFT",
          "WEAPON_LAWS",
          "PORNOGRAPHY_OBSCENE_MAT" ] }},
          count: { $sum: 1 } }
        ]
     ).limit(1000).skip(0).exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*get nbr prediction*/
router.get('/nbrpredict',function (req,res) {
    
    User.find().count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});

/*********************************************** */
router.get('/nbraussault',function (req,res) {
    
    User.find({ $where : "0.05<this.ASSAULT" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** */
/*********************************************** */
router.get('/nbrbribery',function (req,res) {
    
    User.find({ $where : "0.05<this.BRIBERY" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrburglary',function (req,res) {
    
    User.find({ $where : "0.05<this.BURGLARY" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrdrunkness',function (req,res) {
    
    User.find({ $where : "0.05<this.DRUNKENNESS" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbremb',function (req,res) {
    
    User.find({ $where : "0.05<this.EMBEZZLEMENT" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrextortion',function (req,res) {
    
    User.find({ $where : "0.05<this.EXTORTION" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrfraud',function (req,res) {
    
    User.find({ $where : "0.05<this.FRAUD" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrgambling',function (req,res) {
    
    User.find({ $where : "0.05<this.GAMBLING" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrKIDNAPPING',function (req,res) {
    
    User.find({ $where : "0.05<this.KIDNAPPING" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrLOITERING',function (req,res) {
    
    User.find({ $where : "0.05<this.LOITERING" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrPROSTITUTION',function (req,res) {
    
    User.find({ $where : "0.05<this.PROSTITUTION" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrROBBERY',function (req,res) {
    
    User.find({ $where : "0.05<this.ROBBERY" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrRUNAWAY',function (req,res) {
    
    User.find({ $where : "0.05<this.RUNAWAY" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrSUICIDE',function (req,res) {
    
    User.find({ $where : "0.05<this.SUICIDE" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrTREA',function (req,res) {
    
    User.find({ $where : "0.05<this.TREA" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});

router.get('/nbrTRESPASS',function (req,res) {
    
    User.find({ $where : "0.05<this.TRESPASS" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrVANDALISM',function (req,res) {
    
    User.find({ $where : "0.05<this.VANDALISM" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*********************************************** */
router.get('/nbrWARRANTS',function (req,res) {
    
    User.find({ $where : "0.05<this.WARRANTS" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrBADCHECKS',function (req,res) {
    
    User.find({ $where : "0.05<this.BAD_CHECKS" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrDISORDERLYCONDUCT',function (req,res) {
    
    User.find({ $where : "0.05<this.DISORDERLY_CONDUCT" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrDRIVINGUNDERTHEINFLUENCE',function (req,res) {
    
    User.find({ $where : "0.05<this.DRIVING_UNDER_THE_INFLUENCE" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrDRUGNARCOTIC',function (req,res) {
    
    User.find({ $where : "0.05<this.DRUG_NARCOTIC" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrFORGERYCOUNTERFEITING',function (req,res) {
    
    User.find({ $where : "0.05<this.FORGERY_COUNTERFEITING" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrLARCENYTHEFT',function (req,res) {
    
    User.find({ $where : "0.0<this.LARCENY_THEFT" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrLIQUORLAWS',function (req,res) {
    
    User.find({ $where : "0.05<this.LIQUOR_LAWS" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** */
/*************************** *//*************************** *//*********************************************** */
router.get('/nbrMISSINGPERSON',function (req,res) {
    
    User.find({ $where : "0.05<this.MISSING_PERSON" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrNONCRIMINAL',function (req,res) {
    
    User.find({ $where : "0.05<this.NON_CRIMINAL" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrOTHEROFFENSES',function (req,res) {
    
    User.find({ $where : "0.05<this.OTHER_OFFENSES" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrRECOVEREVEHICLE',function (req,res) {
    
    User.find({ $where : "0.05<this.RECOVERE_VEHICLE" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrSECONDARYCODES',function (req,res) {
    
    User.find({ $where : "0.05<this.SECONDARY_CODES" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrSEXOFFENSESFORCIBLE',function (req,res) {
    
    User.find({ $where : "0.05<this.SEX_OFFENSES_FORCIBLE" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrSEXOFFENSESNONFORCIBLE',function (req,res) {
    
    User.find({ $where : "0.05<this.SEX_OFFENSES_NON_FORCIBLE" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrSTOLENPROPERTY',function (req,res) {
    
    User.find({ $where : "0.05<this.STOLEN_PROPERTY" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrSUSPICIOUSOCC',function (req,res) {
    
    User.find({ $where : "0.05<this.SUSPICIOUS_OCC" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrVEHICLETHEFT',function (req,res) {
    
    User.find({ $where : "0.05<this.VEHICLE_THEFT" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrWEAPONLAWS',function (req,res) {
    
    User.find({ $where : "0.05<this.WEAPON_LAWS" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*************************** *//*************************** *//*************************** *//*********************************************** */
router.get('/nbrPORNOGRAPHYOBSCENEMAT',function (req,res) {
    
    User.find({ $where : "0.05<this.PORNOGRAPHY_OBSCENE_MAT" }).count().exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});

/*get by id*/
router.get('/:id',function (req,res) {
    var id=req.params.id;
    User.findById(id).exec(function (err,user) {
        if(err) {
            res.send(err)

        }
        if(!user) {
            res.status(404).send();

        }
        else {
            res.json(user);

        }
    });
});
/*delete*/
router.delete('/:id',function (req,res) {

    var id=req.params.id;
    User.findByIdAndRemove(id,function (err,user) {
        if(err)
            res.send(err);
        else
            res.send();
    });

});
/* update*/
/*put*/
router.put('/:id', function(req, res){
    User.update({_id: req.params.id},
        {
            email: req.body.email,
            password   : req.body.password

        }, function(err, user){
            if(err) res.json(err);
            else
              res.json(req.body);
        });
});
/*analyse and clean*/

module.exports = router;
