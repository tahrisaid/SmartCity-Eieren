var User=require('./../models/userSchema');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
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
/*get all*/
router.get('/', function(req, res, next) {

    User.find(function (err,users) {
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
module.exports = router;
