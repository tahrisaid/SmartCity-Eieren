var Account = require('./../models/AccountSchema');
var express = require('express');
var fs = require('fs');
var router = express.Router();
var jwt=require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');

router.post('/login',function (req,res) {

  Account.findOne({email:req.body.email},function(err,account) {
       if(err)
           res.send(err);
       if(!account)
           res.status(401).json(account);
       else{
           if(bcrypt.compareSync(req.body.password,account.password)){
               console.log('account found');
               req.session.userId = account._id;
               console.log(req.session.userId);
               var token=jwt.sign({email:account.email},'s3cr3t',{expiresIn:3600});
               res.status(200).json({success:true,token:token});
           }else{
               res.status(401).json('Unauthorized');
           }
       }
   });
});

/* Register */
router.post('/', function (req, res) {
   var account = new Account(req.body);
    account.save(function (err, account) {
        if (err)
            res.send(err);
        else
            res.send(account);
    }); 
    
});

/*get users*/
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

/* log out */
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        console.log('mchet')
      }
    });
  }
});

module.exports = router;

