var Account = require('./../models/AccountSchema');
var express = require('express');
var fs = require('fs');
var router = express.Router();
var jwt=require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');

/****** Login method *******/
router.post('/login',function (req,res) {
  Account.findOne({email:req.body.email},function(err,account) {
       if(err)
           res.send(err);
       if(!account)
           res.status(401).json(account);
       else{
           if(bcrypt.compareSync(req.body.password,account.password)){
               console.log('account found, Session on!!!!');
               req.session.userId = account._id;
               console.log(req.session.userId);
               var token=jwt.sign({email:account.email},'s3cr3t',{expiresIn:3600});
               res.status(200).json({success:true,token:token});
           }else{
               res.status(401).json('Unauthorized to log in! Try again.');
           }
       }
   });
});

/****** Register method *******/
router.post('/', function (req, res) {
   var account = new Account(req.body);
    account.save(function (err, account) {
        if (err)
            res.send(err);
        else
            res.send(account);
    });  
});

/****** Get users method *******/
router.get('/', function (req, res, next) {
  Account.find(function (err, accounts) {
      if (err) {
          res.send(err)
          console.log('error')
      }
      if (!accounts) {
          res.status(404).send();
      }
      else {
          res.json(accounts);
      }

  });
});

/****** Log out method *******/
router.get('/logout', function(req, res, next) {
  if (req.session) {
        req.session.destroy(function(err) {
        if(err) {
            return next(err);
        } else {
            console.log('Session destroied')
        }
        });
  }
  else {
    console.log('Theres no session to destroy')
  }
});
module.exports = router;

