var User=require('./../models/PredictionSchema');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    User.find(function (err,users) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!users) {
            res.status(404).send();
            console.log('users')
            console.log('bonjour')
        }
        else {
            res.json(users);
            console.log('json')
        }

    });
});

module.exports = router;
