var User=require('./../models/crimeSchema');
var express = require('express');
var router = express.Router();
/*get allllll*/
router.get('/all',function (req,res) {
    
    User.find().limit(10000).skip(0).exec(function (err,user) {
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
router.get('/nbrcrime',function (req,res) {
    
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
/* post */
router.post('/register',function (req,res) {
    var user=new User(req.body);
    user.save(function (err,user) {
        if(err)
            res.send(err);
        else
            res.send(user);
    });
});
module.exports = router;
