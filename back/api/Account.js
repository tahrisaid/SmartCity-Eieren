var Account = require('./../models/AccountSchema');
var express = require('express');
var fs = require('fs');
var router = express.Router();



router.post('/login:email',function (req,res) {
    //var email = req.params.email;
        Account.findOne({ email: email })
          .exec(function (err, account) {
            if (err) {
              return callback(err)
            } else if (!account) {
              var err = new Error('User not found.');
              err.status = 401;
              return callback(err);
            }
            bcrypt.compare(password, account.password, function (err, result) {
              if (result === true) {
                return callback(null, account);
                console.log("connecté");
              } else {
                return callback();
                console.log("non connecté")
              }
            })
          });
})

/* post */
router.post('/', function (req, res) {
   var account = new Account(req.body);
    account.save(function (err, account) {
        if (err)
            res.send(err);
        else
            res.send(account);
    }); 
    
});

/*get all*/
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


module.exports = router;

