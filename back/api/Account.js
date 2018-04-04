var Account = require('./../models/AccountSchema');
var express = require('express');
var fs = require('fs');
var router = express.Router();




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

