var TODO=require('../models/TodoSchema');
var User=require('./../models/userSchema');
var express = require('express');
var router = express.Router();

/* post */
router.post('/:userEmail', function(req, res, next) {

    var userEmail = req.params.userEmail;
    var utilisateurTrouve =
        User.findOne({email: userEmail})
            .exec(function (err, user) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(req.body.text);
                    var todo=new TODO({
                        text: req.body.text,
                        completed: req.body.completed,
                        completedAt: req.body.completedAt,
                        Media: req.body.Media,
                        createdBy: user._id
                    });
                    todo.save(function (err,user) {
                        if(err)
                            res.send(err);
                        else
                            res.send(user);
                    });
                }
            });
});
/*get*/
router.get('/:userID', function(req, res, next) {

    //  http://localhost:3005/todos/5a93d26ebf6c691fd0c28f17
    TODO
        .find({createdBy:req.params.userID})
        .populate('User','_id')
        .exec(function (err, todos) {
            if (err) {
                res.send(err)
                console.log('err')
            }
            if (!todos) {
                res.status(404).send();
                console.log('todos')
            }
            else {
                //replace ids with emails
                res.json(todos);
                console.log('json')
            }

        });
});
/*get by id*/
router.get('/:id',function (req,res) {
    var id=req.params.id;
    TODO.findById(id).exec(function (err,todo) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!todo) {
            res.status(404).send();
            console.log('todos')
        }
        else {
            res.json(todo);
            console.log('json')
        }
    });
});
/*delete*/
router.delete('/:id',function (req,res) {

    var id=req.params.id;
    TODO.findByIdAndRemove(id,function (err,todo) {
        if(err)
            res.send(err);
        else
            res.send();
    });

});
/* update*/
router.put('/:id', function(req, res){
    TODO.update({_id: req.params.id},
        {
            text: req.body.text,
            completed   : req.body.completed,
            completedAt : req.body.completedAt
        }, function(err, todo){
            if(err)
            {res.json(err);}
            else
                {
                    res.json(req.body)
            }
        });
});

module.exports = router;
